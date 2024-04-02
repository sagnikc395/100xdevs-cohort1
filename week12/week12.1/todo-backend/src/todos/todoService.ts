import { Todo } from "./todo";

//similar to a zod type of what user should send back to the object.
export type TodoCreationParams = Pick<Todo, "title" | "description">;

//service class
export class TodoService {
  public get(todoId: string): Todo {
    console.log("mock db get call");
    return {
      id: todoId,
      title: "mocked todo",
      description: "mocked todo",
      done: false,
    };
  }

  public create(TodoCreationParams: TodoCreationParams): Todo {
    //ideally do a database post here
    console.log("mock db create call");
    return {
      id: "1",
      title: "mocked todo",
      description: "mocked todo",
      done: false,
    };
  }
}
