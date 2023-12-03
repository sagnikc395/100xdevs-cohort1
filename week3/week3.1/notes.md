## week3

- Foundations for databases
- Connecting frontends to backends.
- AJAX
- cors 
- DOM 

- Databases are the important high level thing required.
- Start using actual websites and create interfaces and connect that to our backend and store result with db and fetch results.
- Understand Cors and DOM.
  

## WEEK3.1

- Arrow Functions:
  - A new syntax to write the Javascript course.
  - 3 ways to write callbacks in js.
```js
// 1. using function isnide functions 
function callback1(req,res){
    res.json(todos);
}

app.get('/todos',callback1);


//using anonymouse functions 

app.get('/todos',function (req,res) {
    res.json(todos);
})

// using arrow functions 

app.get('/todos',(req,res)=> {
    res.json(todos);
})
```
- in nodejsn required a fetch to call a different thing.
- here also require the fetch to call the function
- we want persistence in todos, i.e if stuff is closed etc. not to keep it everything in memory and todos does not get reset.
- Need a database , here using a file to store the stuff.
- reading from the file is read in the text format.
- we dont want to return to the end user a string.
- cant directly write objects directly to file; need to use Objects to write to files.
- JSON.strinigy(object-name)

- connecting frontend to backend:
  - cors
  - ajax requests(fetch)
  - DOM manipulation.

- fetch :- global variables , required to get the items from a thing.

- however can't directly allow the client to click on that without setting up CORS.
- Any button needs to do something when clicked, clicking a button should do something.How to tell what should a button is to do is through onclick in html and this will get called when the button is called.

- fetch allows to get the URL from the frontend.
- for getting the response we need to first get the json response object and then parse it.

- fetch returns a callback response on calling the method.

- Whatever is then used isnide the function , we can then pass another callback and on which we can do actual business logic that we are looking for.

- better libraries like axios also exist which can be used later.

## CORS Error

- Frontend send requests to the backend server.
- What if some other client is sending frontend to our backend ? 
- fetch allows to send the requests anywhere.
- not good for multiple security reasons.
- these things are therefore blocked by default
- Cross Origin Response Error i.e if the origins are not the same,from google.com -> chat.openai.com is faulted.

- how to solve ?
  - Make sure your frontend requests are being sent from the same origin where your backend requests are being served.
  -  or can have the backend allow requests from everywhere or specificed ports using cors module.
  -  