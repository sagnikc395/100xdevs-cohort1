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

- 