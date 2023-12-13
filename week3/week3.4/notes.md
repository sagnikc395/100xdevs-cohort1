## Authentication (JWT)

- When create a new course , a backend request goes out to the CMS.
- But need to make sure only the authorized user can see it.
- Only visible to admin for admin protected routes.

- How to start protect routes?
  - Admins can also access admin routes
  - Users can only access users routes.

- For the routes to be admin only i.e starting with /admin , for each request type we add a adminAuthentication middleware first, and the middleware will only allow admin authenticated users to access it.

- To add route specific middleware, the admin middleware needs to handle the logic.
- *When we want a middleware to be used for all the routes we use app.use(middleware_name) at the very top*, 
- for others, we overload the function for each different request in express.(Pass the middleware right into the function ,right before the handler.)

- Dumb Authentication:
  - Send username and password in every request in the headers.

- UGLY SOLUTION:
  - STORING IN MEMORY
  - DONT WANT USER TO SEND PASSWORD AND USERNAME in every request.

- 
