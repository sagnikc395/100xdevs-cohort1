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
- 