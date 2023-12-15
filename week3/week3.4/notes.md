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

- Authorization Header:
  - send username and password in a single requests and not in a plaintext format 
  - otherwise people can inspect the requests and can check it.
  - Soln: Hash this out to some token and send that token out in every request.

- In real world, send a single token, generate this token when we sign up or log in.
- /singUp -> sing up request
- /login -> Log in request 
- we did send the username and password , but the server will return us back a very long string. we store this on client side, and the server sort of knows that this token is the users token and can set a expiry for that token.

- tokens are transitory and non human redable. Any qauthenticated route you need to hit, please use this route.

- In JWT, only the first time does the username and password go into the backend, rest of the time, they pass the authorization header token.
```json
  {"application" : "bearer": {...}}
```

- In headers it should Authorization as the key and the value as Bearer--space--token.This token is encapsualting the user identity. 
- Better to send a token (non human readble string); only the server can decode and humans cant.


## Encryption and Hashing :

- Given a username and password , generate a JWT token.
- Encapsualte some plaintext human readable string and encrypt to some random gibberish.

- The property of the random gibberish should also reversibly return the human gibberish in plaintext.

- Another property of encryption is that it has a server side secret.
- We want one method to encrypt and one method to decrypt.
- Using the string and this thing we have we get back ABC.
- this secret of ours can drastically change what the thing is going to be .
- Evryone in the world can convert back what this secret is going to be.
- in jsonwebtokens, the sign function to sign the input key-value pair to a encrypted string and the verify thing could check and return a bool for any other request if that is the same thing or not. and another function like decode to decrypt the response.

- In the assignment solution we are just encapsulating the username not the password , as the user will in the future send us the username and we dont need to check the password, we can simply check the token from the username and verify.

- to prevent the bug of creating multiple courses(not a admin),  can use different secret keys for users and admin for generating JWT.
- or create 2 different JWT creation and authentication for admin and users.





