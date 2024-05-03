//assuming sample todos data
const todos = [
  { title: "a", descp: "aaa" },
  { title: "n", descp: "nnn" },
  { title: "c", descp: "ccc" },
];

//creating our own reconciler

function createDomElement(todos) {
  //given todos , we need to populate them here
  //create a main area
  const parentElement = document.getElementById("mainArea");
  for (let i = 0; i < todos.length; i++) {
    //parent element under it
    const childElement = document.createElement("div");
    const grandChildElement1 = document.createElement("span");
    grandChildElement1.innerHTML = todos[i].title;
    const grandChildElement2 = document.createElement("span");
    grandChildElement2.innerHTML = todos[i].descp;

    const grandChildElement3 = document.createElement("button");
    grandChildElement3.innerHTML = "Delete";
    grandChildElement3.setAttribute(
      "onclick",
      "deleteTod(" + todos[i].id + ")"
    );

    childElement.appendChild(grandChildElement1);
    childElement.appendChild(grandChildElement2);
    childElement.appendChild(grandChildElement3);
  }
}

createDomElement(todos);
window.setInterval(() => {
  //call this with different values
  createDomElement([
    {
      title: "gym",
      descp: "oks",
    },
  ]);
}, 5000);

function parsedResponse(data) {
  console.log(data);
}

function callback(resp) {
  resp.json().then(parsedResponse);
}
function onPress() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  fetch("http://localhost:3000/todos", {
    method: "POST",
    body: JSON.stringify({
      title: "gym",
      description: "go to gym at 7",
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(callback);
}
function todosCallback(data) {
  console.log(data);
  const parentElement = document.getElementById("mainArea");
  //way for us to insert js variables into HTMl
  const childElement = document.createElement("div");
  childElement.innerHTML = "something";
  parentElement.appendChild(childElement)
  //parentElement.innerHTML = JSON.stringify(data);
}
function callback2(resp) {
  resp.json().then(todosCallback);
}

function getData() {
  fetch(`http://localhost:3000/todos`, {
    method: "GET",
  }).then(callback2);
}
