## HTTP Servers 

- Frontend and Backend ; frontend talks to backend via middlewares.
- Some are simply frontend and some are simply backend.
- lock files locks the versions and goes to node_modules and checks what version we are looking for right now.
- client -server model lets someone to write something to write a server(generally alwyas AWS) that can talk to people (client)
- frameworks makes it easy so as to create  a http server ; runs on a backend machine and listenes to external requests.
- once the task is done , it returns the logic back.
- A request goes to the server (from the client - how ?); http server needs to listen to the request and respond to the responses.

- express has the logic in this file that has the logic inside that creates the server, we need to use the API to make it successful.External library was written to be used as a black box. Express creates a HTTP server from scratch.

- HTTP servers are long running process. They should always run in the backend, and run indefinitely.
- PORT : part of a URL.

- How to listen to different routes?
  - Signifgicance of different routes are they provide different functionality.
  - app.get('/',()=>{...}) functionality is to invoke the callback requests whenver the particular route is being hit.

- Sending Data To the backend:
  - Query Params 
  - Headers
  - Body 
  are some ways in which we you can send data to the backend.

  - Query Params:
    - After the route add a ? and seperate them with &.

  - To modify the backend code, to take i/o in the headers and send it back to the request parameters.
  - It has everything including the routes,  the headers and the body will be stored.
  - Can pass the value as req.query.counter.
  - Can send more data along with the request.Not just the status of the server but also what inputs the server needs to use.

- The inputs to the request, should ideally be sent by the user using the methods seen above.

- what methods can a handle request take?
  - using the request parameters and using different routes and defining diffrent handlers for that routes.
  
  - Later the also added the thing where we need to specify if we needed to put some data to the backend,get some data from the backend,delete some data from the backend or need to update some data.
  - This forms of the basis of CRUD functionality.
    - CREATE
    - READ
    - UPDATE 
    - DELETE

  - Every http request has the third thing called the method, the important ones are called :
    - GET
    - POST 
    - PUT
    - DELETE

  - whenever we are writing our handlers, we need to metion what type of request this will expect.by default we use the app.get() -> get method on the express instance.
  - Anytime we pass the URL and send , we send a GET request, default request.
  - check in request headers in dev tools.

- Sign/Up -> Create a new data for me ; POST request.
- Update Email/name etc. -> put request.
- delete something -> delete request.

- Ideally the request going to the backend should use those assigned request, but we can also do everything with GET request itself.These are standards.

- From the URL bar , can only be received as a GET request.
- everything in get request is present in browser history.

- catchAll request handler can be created to created a new request to add a new user.(eg: instagram)
(ref the newUserId signup handler fnction in week2.1js)

## week 2.2

- 