## Legacy Frontend (Until 2014) and DOM:

- How Frontends were written before React,Vue were introduced?
- Learning Today:
  - Building dynamci frontend applications (legacy)
  - DOM 
  - Reconciliation in frontend projects.
    - Why important and why and where reconciliation is used in React?

- Create good foundations and knowing about reconciliation is what get into good companies and used for interview questions.

- can get the title using document.getElementbyId('title').value;
- this will fetch the value that is passed for that id in the UI level.

- similarly we could define a function for get and get all the data.

# DOM Manipulation : to change the Dom elements on the fly.
## Websites are dynamic 
- put extra html when using the particular data
- the problem is that we dont know the HTML upfront.
- we dont the HTML upfront, when the JS comes up is that when put the data upfront.
- we need to slowly add the data here from the DOM.
- To change the inner HTML of a div we can use 
document.getElementById('item').innerHTML = `html for it`

- Insert js variables inside HTML, that is what dynamic websites are.
- Use Javascript to create HTML -> dynamic websites.
- createElement(elementname) -> to add a new dom element in it.
- helps to insert div inside another div programmatically through Javascript.


## The child element that needs to be inserted needs itself to have 3 childs itself. It has 3 spans inside. Recursively insert the item inside the 3 spans .
- Rather than inserting 3 spans we will create 3 childs inside it.
- Frankly we could also go 1 level deeper as children can also have children.
- Frontend doesnt update automatically,have to click the refresh button.
** List of todos to enter in JS ** -> 
- after the fetch completes we call the callback, we can just append the data in the callback.
- only difference is that data we add has the title and  convert whatever we have got into parsed response and callback it.

- the backpack uses the title and the description.
- using form tag will automatically refresh it, or calling getData inside the function.

- for the delete button we need to add a onClickHandler to it.
- and using setAttribute can set up the attirbute for the onlcick handler for it. 