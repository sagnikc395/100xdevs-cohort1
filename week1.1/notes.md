# Week 1.1 Notes:

- Recapping the prerequisites.
- Programming Languages:
  - 0s and 1s 
  - Assembly language 
  - High level programming languages.
  - Easy for computers,hard for humans , require higher level programming languages.

- JS Architecture:
  - ref: [JS Architecture Diagram](./js-architecture.excalidraw)
  - Needs to have content,some style and some funcitonality as well.
  - Need for this as scripting language for what we can do
  - HTML and CSS cannot do scirpting.
  - Back in the day, was made to only understood by browsers.
  - Every JS compiler need to follow the ECMAScript standard and on the js engines on it.

-  The things that interprets JS is very different for chrome,firefox and safari. All 3 of them have thier own engines, and wrote their own implementations of the ECMAScript standard.
-  The engine is responsible for making things from 0to 1 and that how things work.

## Node.js 

- ref: [Nodejs](./node-js.excalidraw)
- People realised that JS is a powerful programming language and has been running on the frontend , so we should also run them on the backend as well so as to quickly move teams and adopts things faster.
- Backend Machines:- A native program that is not on the browser(native apps).
- Node.js was one framework was that stripped from v8 engine (remote everything browser related) and just keeping the parts that was converitng javascript code to instructions.
- **Node.js -> runtime for Javascript.,just the engine that chrome use** 

## Primitives:
1. Variables 
2. numbers 
3. strings 
4. arrays  :- lets us iterate and store multiple data
5. loops :- helpful for iterating over things.
    - for 
    - while
6. Objects :- key.value pairs ; helpuful for modelling real world things
7. Functions :- primtiives ; passing functions inside functions ; takes a input , do some operations on it and returns a output.

8. DRY ; max reuse of code and can be reused freeely.

## Functions 
- Functions can take other functions as input.
- 