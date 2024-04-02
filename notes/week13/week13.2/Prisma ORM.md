- writing scripts, migration issues and no good DX improvement and types for the developer and not provide any good improvement.
- ORMs came into the picture.
- Give basic functions that is provided to us.
- ORM:
	- Data Model
	- Automated Migrations 
	- Type Safety 
	- Auto Completion
- Layer in the middle between database, and its syntax is same and can provide an abstraction over a particular database.
- Other ORMs:
	- drizzle
	- sequelize
	- ..
- Libraries Provided by Prisma:
	- Prisma Client:
		- auto gen and type safe query builder for Node and TS
	- Prisma Migrate:
		- migration tool to easily evolve our database schema from prototyping to production
	- Prisma Studio:
		- GUI to view and edit data in our database.
- Automated Migrations:
	- DB Changes often, we add more columns, add new tables , we need to have MIGRATIONS to keep syncing DB state.
	- Pre ORM days - manually update the prod DB, dev DB.
		- ssh into the AWS Instance, create the query and run the migrations.
	- There was no log of the changes made to the DB.
- Prisma used a lot in the industry and used by cal.com and dub.sh.
- Running migrations and creating tables , Prisma needs access to a database and also needs to create temporary database on it to manage the migrations.

### setup prisma (refer the official docs):
- create typescript project and install prisma, typescript, @types/node as dev dependencies.
- setup ts config with tsc --init 
- init prisma in our project:
	- npx prisma init --datasource=provider postgresql
	- creates a file in prisma/schema.prisma
- dont commit secret to Github, add .env file to gitignore
- Model your data in the Prisma Schema:
	- a single source of truth of our schema 
	- only once we have defined our schema we can put our data and connect to the db.
	- the migrations and the dx experience is provided by prisma itself.

### Prisma Constructs:
- @id @default(autoincrement())
- @unqiue
- @default(false)
- @relation(fields:\[authorId],references:\[id])
- Eg:
```prisma
	model User{
	id Int @id @default(autoincrement()) -> id is integer type, with a default value and it increments automatically
	email String @unqiue ->  email should be a string and should be uniuqe type
	name String? ->  name is optional type
	posts Post[] -> for a user, posts array for the user.
	}
```
### relate data together:
- todos are related to users. every todo will have a user here and a foreign key.
- making a database construct strong -> no orphan todo present.
- same as can't delete user with multiple todos.
- Using foreign keys in prisma
```prisma 
model Post {
	id Int @id @default(autoincrement())
	title String 
	content String?
	published Boolean @default(false)
	author User @relation(fields :[authorId],references:[id])
	authorId Int
}
```
- the authorId is a foreign key for the Post table.
- Author is never stored in Post database, high level abstraction and are related conceptually and can use them using foreign keys and constraints.

### run a migration :
- run a migration with prisma/migrate library.
- npx prisma migrate dev --name init
- whenever prisma creates migrations , needs access to hidden table to run these migrations.
- This will create a new folder under migrations folder called migrations which will have the generated sql files.
- 