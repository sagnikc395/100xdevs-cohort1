import { Todo } from "./todo";

export type TodoCreationParams = Pick<Todo, "title" | "description">;

//service class
export class TodoService {
  //write to the db
  public get(todoId: string): Todo {
    return {
      id: todoId,
      title: "mocked todo",
      description: "mocked todo",
      done: false,
    };
  }

  public create(TodoCreationParams: TodoCreationParams): Todo {
    //ideally do a database post here
    console.log("Mock db call");
    return {
      id: "1",
      title: "mocked todo",
      description: "mocked todo",
      done: false,
    };
  }
}
