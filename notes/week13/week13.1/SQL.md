
- Types of Databases:
	- SQL -> Strict schemas ; very hard to change schemas, requires migrations ; the tables has to be very strictly defined in our schema and has to satisfy that 
	- NoSQL -> Schemaless -> Faster to produce apps; dont need to tell the schema upfront; faster in production.
- SQL Databases:
	- Table with a bunch of rows with some datatypes; can put objects here as well. not recommended, harder and harder to do searching.
	- harder to do it if we shove it down here.
	- always do normalize to other databases and do searching from there.
	- break down into smaller sub databases and these tables are somehow related to each other.
- Types of SQL Databases:
	- Postgres
	- MySQL
	- ...

- Connecting to a Postgres Database:
	- postgres://\[username]:\[password]@\[host]/\[database_name]
	- ec2 instances / url to that hosted.

- To start a Postgres server:
	- can start locally using containerized fashion using Docker 
	- can use neon.tech to create a free postgresql database.

- basic things that we want from our database.
		- Insert
		- Update
		- Delete 
		- Get 
		- ![[Screenshot 2024-04-01 at 5.55.48 AM.png]]

- Learn by doing:
	- DB for a TODO App
	- Create a empty Node.js project 
	- Install pg -> pg driver for nodejs and its types.
	- helpful for doing the queries and to add these changes.

- DB Schema:
	- ![[Screenshot 2024-04-01 at 6.02.28 AM.png]]
	- Email and Password
	- Do todos of {id,title,descp,user_id and done}
- Before to even starting to write a table:
	- define the schema of the database -> structure of the database.
	- define the fields and their types 
	- SERIAL PRIMARY KEY,VARCHAR, UNIQUE, NOT_NULL
	```sql
	 create table users(
	 id SERIAL PRIMARY KEY,
	 email VARCHAR(255) UNIQUE NOT NULL,
	 password VARCHAR(255) NOT NULL);
```
- Primary key, unique, varchar, not null:
	- primary key -> to provide a unique index and to automatically generate unique id for every row of the table. to identify the users uniquely.
	- varchar(255) -> variable character of length 255.
	- unique -> email also will also be unique 
	- not null -> need to provide password and email fields.

- Create Table Todos:
	```sql
	CREATE TABLE todos (
		id SERIAL PRIMARY KEY,
		title TEXT NOT NULL,
		description TEXT,
		user_id INTEGER REFERENCES users(id),
		done BOOLEAN DEFAULT FALSE
	);
	```
- References and Default:
	- done will default to false, unless we pass todo.
	- references -> relationships, need to be able to tell what one todo is doing with another todo, need to be able to relate these todos.
	- harden this of maintaining the relationship is using FOREGIN KEYS which in postgres is REFERENCES.

- cli that is used to connect to a postgres instances with the given host and username and password.
	- connecting to postgres using psql(libpg) and then connecting as:
	```bash
psql --set=sslmode=require -h ep-noisy-mountain-a51vsivi.us-east-2.aws.neon.tech -p 5432 -U postgres-1_owner -d postgres-1 
		```

- src/utils.ts has the boilerplate to connect to a postgres client and takes the connection string as input.
- src/create-table.ts ->
	- query to create a table in our database.


### Inserts:
```sql
INSERT INTO todos (title,description,user_id,done)
values("buy groceries","milk,bread and eggs",1,FALSE);
```
- why seperate values into $1,$2 etc?
	- to prevent SQL injection directly from the user in the frontend.
	- very common vuln, as we are letting users to inject queries directly.
	- instead use variable templates to add the data dynamically.

- check src/insert-data.ts

### Gets:
```sql
SELECT * FROM todos where user_id = desired_user_id;
```
- we inserted data, but we also need to fetch data eventually.
- select the rows you want from the table you want with optionally the condition given.
- src/get-data.ts

### Updates:
- user needs to set that the todo has been done and to update the specific todo.
- and toggle the previous done flag from false to true.
- src/update-data.ts
- these queries can get larger and larger over time.

### Delete:
```sql
delete from todos where id = specific_todo_id;
```

```ts
async function deleteTodo(todoId: number) {
	const client = await getClient();
	const deleteTodoText = 'DELETE FROM todos where id = $1';
	await client.query(deleteTodoText,[todoId]);
	console.log(`Todo with ID ${todoId} deleted!`);
}
```
- 