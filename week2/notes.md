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

- Other ways to send data backend to backend servers.
- Headers
  - Different way to send data along with our requests.
  - Ref from Postman 
  - sent as key-value pairs (custom headers)
  - default headers passed by default.
  - counter no longer works as a query parameter,so by default post will give 0.
  - have to make the changes in code also.
  - use :
    - var counter = req.headers.counter;(key-name of the header)

- Body:
  - Place where we sent most of our data in real world.
  - need to understand middlewares first.


### Middlewares 
- are a way for us to capture requests before it hits the endpoint.
- (defn)middleware functions are functions that have access to the request object (req) and the response object(res) and the next middleware function in the applications request-response cycle.The next middleware function is commonly denoted by a variable named next().

- Typically middlewares do:
  - Execute any code.
  - make changes to the request and the response objects.
  - end the request response cycle.
  - call the next middleware function in the stack.

  - middleware does some logic in it and then the middleware can pass the request to app.get() 
  (lets say).
  - usually done for authentication,telemetry etc.
  - authneticate incoming requests and users are logged in.
  - send all requests using authentication middleware and checks if it has passed all such cases and then it reached the required endpoint.

- use app.use() to register the middleware callback function.
- call it right below where we have defined the middleware callback function.
- takes 3 arguments in the callback:
  - req,res and next.
  - it can then decide to stop it here or pass it next to the next handler.
  - else the request ends here.
- why next() calling makes the call go before and capture the request is a black box for now !
- if we are not calling next, then send a error response from there via res.send('Error from inside middleware');
 
- body is another such thing that caan't be passed in browser URL.
- body -> JS object;key-value pair(JSON). Needs to be a valid JS object.
- body is not something that express gives us out of the box.
- req.body is undefined as there are various types of bodies, and express being a generic http server does not support them. Need to bring our own libraries to support them.

- latest version of express has unbundled the middleware from core framework,and ned to use a external library to extract the diffrent things. use body-parser.
then bind it with the middleware as:
  app.use(bodyParser.json())

- this introduces a new middleware and then calls the next to the next handler.

- For multiple middlewares , we need to chain the middlewares together in a chain.

- The function within app.use() is the middleware.

- we can also have route specific middleware.
```js
  app.post('/route',middle,callbackFn)
```

## Status Code 

- Are the responses from the server.
- The server can also send us back:
  - status codes
  - body
  - headers
- 404 ; a status code; server along with giving back a text can give us back a number.

- Status Codes Ranges:
  - Informational Responses 100-199
  - Successful Responses 200-299
  - Redirection Responses 300-399
  - Client Error Responses 400-499
  - Server Error Responses 500-599

- Ideal things that server should return with.
- The default status code by express is 200.
- res.status sends a status code.

- Bunch of body type:
  - HTML
  - JSON
  - Simple Text

- sending in JSON or XML is a more structured way to send the data. It is a data interchange format.

- send can send object -> maps to a JSON.
- third thing we can send is HTML.
- browsers job is to render the HTML tag.

