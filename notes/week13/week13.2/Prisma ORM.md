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

-- need to continue from 18:25 --
https://harkirat.classx.co.in/video/178?courseId=2&ytFlag=0&isFolderCourse=1