
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

- Basic Type of Queries: 
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
	- 