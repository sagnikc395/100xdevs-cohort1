# React, effects and Custom Hooks:
- React has a different mental model than other tradiitonal programming thing.
- Array rendering (maps,filter) -> one lifecycle hook  on how the things happen happen over and over again.
- render (setInterval example)
- hooks (useStatem useEffect)
- TODO app
- Custom Hooks 

- Start building things is better in React.

### Rendering Arrays 
- Need a for loop inside the JSX to render all the elements of the array.
- best use maps (higher order function technique -> to map each item to another function to mutate on the iterable.)
- Map creates a new copy and does not mutate the original array.

## Can think of components as like defining our own html tags and then using it.

## How does Rendering Happen ?
- Even though the update in setTimeout should happend in 1s , the title should keep changing to something random but it is changing much more quickly than 1s.
- The re-render will occur whenever the state changes, the reconciler will call it whenever the state will change it and check the diff and apply the changes.
- react.usestate protects the state variable as and when we call it. someone calls it when we change the state.

- whenever the re-render happens the hook protects the state variable, until a unless the method to it is being used to mutate the state variable.
- one-way direction ; no 2 way data binding.

- The way react works internally is, when we update the state , similar to the function we call, which then recursively at sometime calls App again. setMethod is called againa and again infinitely and this will crash React.

- setInterval and setTimeout is a slow infinite loop, but still prevents the stack from crashing.

## react in strict mode is rendering it twice, else it would only renders once.

## Hooks 

- useState is a hook in React. Like a function.
- Sort of a thing that remains independent of re - renders.
- 