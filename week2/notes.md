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

- 
