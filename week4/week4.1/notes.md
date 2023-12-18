## React + State 

- Why React?
  - DOM operations are expnesive
  - very hard for application developers to modify the DOM.

- DOM opearations are very expnesive , we want to minimize the number of DOM opeartions, best to add a diff and change the thing , rather than clearing the whole thing.

- Updating the DOM is slightly less expensive rather than creating new elements from the DOM.

- Better way to use a virtual DOM as using the diff and only applyign the diff to the dom ; ones that need to be updated and need to updated only those have been changed.

- id is what defines what item is updated. If the ids are different then updated, else they are not updated.

- A primtive way to find the diff:
```js 
const findDiffBasic = (arr1, arr2) => {
  //diff
  let updated = 0;
  let added = 0;
  // for all the elements that are now added
  for (let i = 0; i < arr2.length; i++) {
    let item = arr2[i];
    let found = false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === item) {
        found = true;
      }
    }
    if (found) {
      updated += 1;
    } else {
      added += 1;
    }
  }

  return { updated, added };
};

```
 as the time complexity is O(N^2), here notice that there is no id used.

- A better more optimized way to find the diff is if we could have used a hashmap with some keys.


## Virtual DOM Optimization:
1. Comparisions 

2. Batching 

- we call the diff and do minimum number of dom operations , to minimize them and call the diff.
eg: using appendChild etc.
- Us maintaining an array at the top, having the data, which can be very easily translated back as state varibale.

Current DOM as a variable -> lean repr of the DOM (not the actual DOM tree, just a copy of it in variables of string integers.)

- As we create more complex applications, the DOM will try to get complex and get very big and complex in very small time. Tree like object in memory of what the DOM looks like, needs to do a bunch of these checks and at multiple times need to give these checks and need to give back an inmemory represtnations of them.

- Can do batch updates with vDOM,otherwsie the updates will happend and too many state changes will happend very quickly. Need to change these things in bulk and update in the main dom.the vDOM is what lets help in updating it ,and let us do batch update with it.

- called 2 set intervals ; sets virtualdom to this new thing and the other to actuall update. we can check the state change in 1000ms and then abtch those change together and update the DOM.

## State and Components 

- You as the application developer only need to update state (State), you should also tell react given a state, how it should iterate over it to render things -> (Components). 

-  State is what your app looks like in a object, components is what the UI looks like.
Then we keep giving it state updates and looks on that.

- createDOMElement() api (react api) should take 2 inputs:
  - a state on which to mutate(state)
  - given a single state, how should the framework should render it.(components)  

- jsx -> javascript ajax -> a repr of code that can encapsulate the UI also. Components are essnetially HTML,CSS and JS code.

- A component file must start with a capital letter.
- App.jsx is the entry point of the react app.

- whenever we are definfing the state varibale(varibales that can change state) in react, we need to define them in a certain way.
We are not just calling a function anymore,we are simply updating todo, and want react to be smart about to know to be able to make the change, to update the todo and update the change.

- we define then using hooks. eg: useState , to change using the state 
```js 

const someTodo = {
  title: "some title",
  description:"some descp",
  id:1
};

//react contenxt
const [todo,setTodo] = useState({...someTodo});
```
now to mutate the state variable we need to use setTodo (the callback), with the business logic on what we want to do on the todo variable.

