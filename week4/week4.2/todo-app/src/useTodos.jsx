//our own hook
//every hook that we define has to start with use

//job of the hook to do the correct computation and return the logic

import { useState, useEffect } from "react";

export default function useTodos() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/todos", {
      method: "GET",
    }).then((response) => {
      response.json().then((data) => {
        setTodos(data);
      });
    });
  }, []);
  return todos;
}
