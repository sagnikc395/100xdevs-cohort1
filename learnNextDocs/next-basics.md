## Basics of Next 

1. Next.js uses file-system based routing. This means that instead of using code to define the routes of our applications we can use folders and files.
2. create a new folder called as app and move index.js(page.js) into it.
3. page.js -> maing page of our application.
4. add export default to the Home component for making next.js distinguish which component to render as the main component of the page.
5. Next.js uses React Server Components by default, a new feature that allows React to render on the server. Server components dont support useState by default, so we will need to use a client component instead.
6. layout.js file was automaticlly created inside the app folder. This is the main layout of our app. We can add UI elements here that are shared across all pages (eg: navigation, footer etc.)

### Server and Client Components:

- Need to be familiar with 2 foundational web concepts:
  - the environments our application code can be executed in : server and the client.
  - network boundary
  

1. Server and Client Environments:

    - Client refers to the browser on a user's device that sends a request to a server for our app code. It then turns the response it receives from the server into an interface the user can interct with.
    - server refers to the computer in a data center that will store your application code, it receives requests from a client, does some compute and sends back the data back an appropriate response.

2. Network Boundary:
- Conceptual boundary line that seperates the different environments.
- In React, we choose where to place the network boundary in our component tree. We can fetch data and render a user's posts on the server using Server Components , then render the interactive LikeButton for each post on the client.
- Similarly we can create a Nav component that is rendered on the server and shared across pages , but if we want to show an active state for links, we can render the list of Links on the client.


### Behind the Scenes:
- Components are split into 2 module graphs. The server module graph contains all the Server Components that are rendered on the server , and the client module graph contains all Client components.
- After server components are rendered , a special data format called the React Server Component Payload(RSC) is sent to the client. The RSC payload contains:
  - Rendered Result of server components 
  - placeholders(or holes) for where the Client Componetns hsould be rendered and references to their JS files.

- to make a whole component as a client component we add the 'use client' on top of the file.s
    

