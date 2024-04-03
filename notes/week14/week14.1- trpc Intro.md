
- moderately hard concept
- will require marination
- not used everywhere and but used in cal.com
- filter out from the general crowd.
- other than the basics of mern -> frontend in next, backend in node and prisma and postgres/mysql and some other niche tech
- after some point need to learn tech on our own.
- new way to write backend systems that even abstracts over the router by using adapters.

### why trpc ?
- RPC -> remote procedure calls
- if i can call a function remotely from somewhere
- traditional be-fe architecture(REST based):
	- ![[Screenshot 2024-04-02 at 8.40.03 AM.png]]
	- nuances:
		- what is GET,POST ?
		- HTTP Protocol 
- better to have a protocol that can just call the functions in our frontend wihtout understanding the HTTP protocol.
- in this case, remote procedure call is useful.
	- under the hood it uses HTTP or any other protocol.
	- but for the application developer the complexity is mitigated.
- ![[Screenshot 2024-04-02 at 8.42.40 AM.png]]
- you as the application developer just do createTodo and dont poke under the hood.
- another famous is gRPC -> defined by google.
- Written in TS uses JSON-RPC under the hood and use the functions in the frontend.

### features of trpc:
- automatic types for fe and be 
	- never had very strict type checking on frontend , trpc solves this through the communication of its types.
- generic code that can be converted to express backend and also nextjs backend ...


### how does trpc provide connections from both fe and be 
 - **adapeters**
 - hosting trpc with adapters:
	 - standalones
	 - express
	 - fastify
	 - next.js
	 - aws lambda + api gateway 
	 - we as a backend developer can write the application and any existing backend application can use the adapters and integrate.
 -  ![[Screenshot 2024-04-02 at 8.50.19 AM.png]]
 - end users just interacts with express or next etc.
 - because of this it is very nicehly popular.



- just functions, making call to a server and showing response to us.
- simply be calling the api fucntions and get by id as we send the arguments.
- vocabulary:
	- procedure -> API Endpoint ; tells that one function that end users can run.
		- They can be of 2 types: query or mutation.
	- query -> GET for getting some data for end users.
	- mutations -> UPDATE data for the end user.
	- router -> collection of procedures, like app in express.

- we have to have the input defined very strictly defined here , somewhat equivalent to express + zod validation added.
- ![[Screenshot 2024-04-03 at 8.31.40 AM.png]]
- .get -> .query 
- todoCreate -> identifier to the specific route 
- .input -> need to be very well defined and constrained by zod

### basic todo server and client ->
- init trpc 
- define router 
- use the adapter to serve the API.
- here client for us -> node server ; a client could be anything that can send http requests / consume http requests.
### init trpc:
- define a t object 
- export router := t.router
- export publicProcedure -> a procedure that lets us create other procedures.
- lets us create a bunch of queries and mutations.

## todo: start from 1:00:02 mark