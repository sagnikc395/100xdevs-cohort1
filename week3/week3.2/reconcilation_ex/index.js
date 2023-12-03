let todo = [
  {
    id: 1,
    title: "go to gym",
    description: "do something",
  },
  {
    id: 2,
    title: "go to gym",
    description: "do something",
  },
  {
    id: 3,
    title: "go to gym",
    description: "do something",
  },
];

function createdomElements(todos) {
  let parentElement = document.getElementById("mainarea");
  parentElement.innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    let childElement = document.createElement("div");
    let grandChildElement1 = document.createElement("span");
    grandChildElement1.innerHTML = todos[i].title;

    let grandChildElement2 = document.createElement("span");
    grandChildElement2.innerHTML = todos[i].description;

    let grandChildElement3 = document.createElement("button");
    grandChildElement3.innerHTML = "Delete";
    grandChildElement3.setAttribute(
      "onclick",
      "deleteTodo(" + todos[i].id + ")"
    );

    childElement.appendChild(grandChildElement1);
    childElement.appendChild(grandChildElement2);
    childElement.appendChild(grandChildElement3);
    parentElement.appendChild(childElement);
  }
}

//calling it with the same value again and again

window.setInterval(() => {
  let todos = [];
  for (let i = 0; i < Math.floor(Math.random() * 1000); i++) {
    createdomElements([
      {
        id: i + 1,
        title: "go to gym",
        description: "ggo to gym before 4",
      },
    ]);
  }
}, 1000);
