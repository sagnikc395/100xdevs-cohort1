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

- 