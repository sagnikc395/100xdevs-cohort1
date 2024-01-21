## Building Blocks of a Web Application:

1. User Interface -> users consuming and interacting with your app
2. Routing -> users navigating between different parts of your app
3. Data Fetching -> where your data lives and how you get it.
4. Rendering -> when and where you render static or dynamic content 
5. Integrations -> what third-party services you use (CMS, auth,payment) and how we connect to them.
6. Performance -> how to optimize your apps for end-users 
7. Scalability -> how your apps adapts as your teams ,data and traffic grows.
8. Dev Ex -> teams expericens building and maintaining your application.

### React ->

- JS library for building interactive UIs.
- By UI we mean the elemnts that users can see and interact with on-screen.
- relatively unopinionated about the other aspects of building applications. Flourishing ecossytem of third-party tools and solutions , including Next.js 
- Requires some effort from groun up to build a completed React app. Devs needs to spend time configuring tools and reinventing solutions for common application requirements.


### Next.js ->

- React framework that gives us building blocks to create web apps.
- Next.js handles the tooling and configuration needed for React and provides additonal structure, features and optimizations for your apps.

### Browsers and DOM 

- Browsers create DOM -> object repr of the HTML elements on the viewport. Acts as a bridge between code and user interface, tree-like structure with parent and child relationships.
- Using DOM manipualtions can update the UI state of a elemnt , change their style and content also.
- need to write a lot of dom code to make small ui changes.
- imperative programming 
- react uses a declarative style , where we write the steps of how the user interface should be updated, because instead of having to write the DOM methods, it would be helpful if developers were able to decalre what they want to show.

### JSX 

- Syntax extension for JS that allows us to describe the UI in familiar HTML-like syntax. The nice thing JSX is that apart from following the 3 JSX rules, we dont need to learn any new symbols or syntax outside of HTML and JS.
- Browsers dont understand JSX out of the box so we need JS compiler like Babel to transform our code into regular JS.


## Building UI with Components :

- 3 Core concepts of React:
  - Components 
  - Props 
  - State

- Components:
  - UI can be broken down into smaller building blocks called components.
  - Allow us to build self contained reusuable snippets of code. Think of components like LEGO , can take these individual bricks and combine them together to form larger structures.
  - This modularity allows the code to be more maintainable as it grows because we can add, update and delete components without touching the rest of our application.
  - Just a function that returns a UI elemnts
  - React components are capitalized to distinguish them from plain HTML and Javacsript.
  - Secondly we use components the same way as we would use regualr HTML tags with angle brackets.
  - We can nest React component inside each other like we can nest regular HTML elements.
  - we can continue nesting this way to create component trees. 

- Props:
  - we can pass peices of info as properties to React components. These are called as props. Similar to JS, we can design components that accept custom arguments or props that change the component's behaviour or what is visibly shown when its rendered to the screen. Then ,we can pass down these props from parent components to child components.
  - since props is an object , we can use object destructuring to explicitly name the values of props inside our functipn parameters.
  - to use the props inside our JSX we can use curly braces ({}) , to write regular javascript directly inside our JSX markup.
  - can access the props as:
    - an object property with dot notation
    - a template literal 
    - returned value of a function
    - ternary operators
  - iteraritn through lists in react:
    - use array.map and provide a key as react needs to know what part to update.
  
- State:
  - React helps us add interactivity with state and event handlers.
  - To make the button do something, we can use the onClick event .

- State and Hooks:
  -  React has a set of functions called as hooks. Hooks allow us to add additional logic such as state to our components. We can think of state as any info in our UI that will change over time , usually triggered by user interaction.
  - we can use the state to store and increment the number of times a user has clicked the Like button. In fact, the React hook used to manage state is called useState().
  - Unlike props which are passed to components as the first function parameter, the state is initiated and stored within a component, We can pass the state information to children components as props, but the logic for updating the state should be kept within the component where state was initiailly created.

