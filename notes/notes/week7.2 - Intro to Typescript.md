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
### tsconfig:
- we can configure TS directly in a single file in the root of the application called the tsconfig.json file.
- provides a bunch of configurations options.
- generate use npx tsc --init.
- 10% of the thing are actually useful for application developers, the 90% things are not useful. 
- target :
	- denotes the final ECMAScript version of the Javascript that is there.
	- versions of the new ECMAScript provide new features , some polyfilling. 
	- es3 and es5 is very old. 
	- es2016 - es2020 is incrementally better 
	- ESnext -> latest features.
	- in prod, we mostly target ES2016 for most browsers and ES2020 and ESNext to target newest and freshest features of Javascript
- module:
	- module type - target system.
	- if the TS file we have written is a module, module is something which exports something or not.
	- what type of module we want TS to export.
	- export vs require (esmodule vs commonjs)
	- in TS we can use esmoudle easily, if we have commonjs as module , it will use exports. To change to the new versions we use esmodulee(es6,esnext).
- Constraints:
	- does casing matter when importing modules 
	- strict 
	- how stricltly should Typescript be evaluated.
	- forceConsistentCaseInFileNames: 
		- make the case in file names consistent.
	- strict:
		- how strictly we want our TS to conform to strict .
		- esmodules are not strict.
		- does not allow any, unknown type implicitly.
		- boolean value

## interfaces, types and enums :
- Types in the real world are really complex.
- an type that is more thatn primitive types.
- interfaces, types and enums help in generating that and create custom types and storage.
### Interfaces:
- Let us accumulate data of a specific type.
- Interfaces can use other interfaces.
- Interfaces can extend interfaces.
- Interfaces can be implemented by classes.
- Problems with defining the types inlining , violate the DRY prinicple.
- Better to define a interface  directly and use that as a type.
- Interfaces that we created, can be implemented by the classes also.
- IMP: **Interfaces can be implemented by classes, they cannot be implemented by types**.
- constructor is what constructs the object.
- we can also defines not only types and state but also functions in interfaces.
- any function that implements the interface must implement the state and the associated methods with that interface.
- with interfaces we can create different type of classes with some overlap with the base interface properties. It could be used in multiple places.
### Types:
- 
	