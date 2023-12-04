(extra class)
## System Design of a Video Transcoder

- High Level Understanding of Things.
- no right or wrong answer
- If dont understand its find.
- Build over 2 years with a lot of trail and error.

-  Code doing a small change , can setup a lost of cost change for client.
-  S3 takes most cost :- storage .

- How Apps are deployed on internet:
  - Way to deploy frontend is very diffrenr than backend.
  - Frontend are effectively a bunch of files :
    - index.html,index.js , styles.css
  -  The dynamic thing that we see are backend requests.
  -  changes a little when we do server side rendering.
  - Since the frontend default app that we get are same for all of the people, we distribute it via CDN.
  - (CONTENT DELIVERY NETWORK) -> bunch of machines around the world, (called as pops) -> point of presence.
  - When we want to deploy the frontend application, they have to store the index.html and serve them locally.

- Frontend Deployment:
  - Vercel.com
  - Netlify
- Another use cases for CDN:
  - Assets 
  - **Videos**

- Videos is where most of the bandwidth is requires.Most of them data is coming. CDN works for all sorts of files.
- If CDN's didnt exist , then the servers would to do the request from the US server and get all the data from a client requesting from India.

- The video is since constant, so it is easy to replicate the video all across the world and serve them in a distributed fashion.

- from 16:19
