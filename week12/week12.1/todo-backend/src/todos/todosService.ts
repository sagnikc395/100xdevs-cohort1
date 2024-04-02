import { Controller, Get, Path, Route } from "tsoa";
import { TodoService, TodoCreationParams } from "./todoService";
import { Todo } from "./todo";

@Route("todos")
export class TodoController extends Controller {
  //create routes, go through them and add the routes for the specific controller

  //eventually this gets converted to a todo server
  @Get("{todoId}")
  public async getTodo(@Path() todoId: string): Promise<Todo> {
    //wheneveer the dynamic route matches, this should reach here
    let todoService = new TodoService();
    return todoService.get(todoId);
  }
}
