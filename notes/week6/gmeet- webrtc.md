
- making a gmeet clone using webRTC and socket.io
- NICHE CLASS 
- webRTC -> niche tech ; huge growth in 2020
- pure video streaming 
- actual theoretically is very huge and theoretical.
- know how to search niche technologies and how to target them.
### Why go nicher?
- Easier for people to know base technolgoies and not marketable.
- Everyone mostly uses meta-frameworks like Nuxt and Next and at base uses React and Vue. not a better job, purely because it is harder to understand and oppurtunities are more.
- there are good niches and bad niches (in terms of money):
	- if you like a specific tech, do that 
	- learn current niche tech.
- webRTC today is not a good niche, AI and web3 are the best niche -> depends on the bull run.
- there is a learning path, most baseline knowledge can be understood better in ~ 3 months.
- zoom is based on webRTC and google captures the webrtc calls that are happening.
- things that power live video:
	- webRTC.
- increased stock prices of many companies like zoom, streamyard and got acquired for 250 mill.
- ![[Screenshot 2024-03-12 at 7.49.51 PM.png]]
- the right way to do it:
	- keep throwing your hands left,right and center. 
	- dont need to build the best thing on day0 , build on things that can be better to be developed.
- Overdeliver at start and then develop over time.
## How to learn WebRTC:
	1. Websockets(general real time comm)
	2. WebRTC in the same tab 
	3. WebRTC across the internet
- Real Time Communication:
	- Incrementally keep sending the fetch request on route and update the list  -> polling.
		- without having to refresh the page, the update data comes from the server.
		- since fetch is calling each time we are calling the fetch.
		- bad as , lots of time the server data might have not got updated.
		- how do we deermine the time to update ?
		- not feels snappy.
	- in polling, your browser send requests after certain time.
	- in web sockets, we do server side events, where the server sends events without asking from it.
	- whenever a new todo is added, websockets lets us fetch the data asynchronously whenever the data in a certain section is changed through a pipe.
- what is HTTP?
	- protocol with the status code.
	- websockets are also a protocol.(IETF)
	- the doc explains what the protocol should look like.
	- imp thing is to how to use it to build it to make real time communication.
## Making a backend websockets server:
- make a empty nodejs project.
- the API is very similar to HTTP, changes very little and can understand the intracacies of the black box of websockets.
- there are lot of libraries that providers a good interface and higher level api over websockets like socket.io.
- can use bidirectional socket without prior requests.
- Eg: chat is also a bidirectional use of websockets. can also poll or can can ask the server using websockets.
- can run websockets without express as well, but socket.io uses express.
### Socket.io basics:
- it is composed of 2 parts:
	- a server that integrated with on the Node.js HTTP server socket.io
	- a client library that loads on the browser side socket.io-client
- socket.emit will send the websocket the event to the server and the server's responsibility is to send to other clients.
- 