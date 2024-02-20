- Why Typescript ?
	- Very hard to write Typescript .
	- Expect to write more things for the same thing.
	- No one actually uses JS in industry.
- JS creates a lot of problems in the code base.
- TS is a superset of JS  -> can write JS inside it (depends on tsconfig), just extensions on top of it.
- It gives us static typing.
- Make our code more strict!!!!
- Loose types create most issue down the line.
- Whenever using reusuable code, we define the types and the function signature ,and the user can send and receive types from functions.
-  Union Types :
	- To restrict the types of a function.
	- To make the types as strict as possible.
### How JS Runs the Code ? TS vs JS Compiler
- starts a thread that executes the code line by line.
- the typescript never runs the code, the compiler only makes code the code is right, the types is correct and give back the correct js files.
- then run the js files via node/ bun.
- during the compilation , TS compiler inspects the code for types. 
- tl;dr -> 
	- JS Compiler/ engine actually runs the code, TS Compiler only checks the code and spits out a optimized JS code.basically a. high level linter.
	- any error thrown by TS is compilation error, and any error thrown by JS is called as runtime error.
- the compiler is called tsc.
### Setup TS locally:
```bash
npm install -g tsc 
 
```
- -g means install this dependency globally -> helps to install typescript globally.
- 