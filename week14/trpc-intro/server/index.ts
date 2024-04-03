import { publicProcedure, router } from "./trpc";
import { z } from "zod";

//validation on types with zod
const todoInputType = z.object({
  title: z.string(),
  description: z.string(),
});

//create a top level approuter
const appRouter = router({
  //defining a procedure
  //since update required , doing a mutation
  createTodo: publicProcedure.input(todoInputType).mutation(async (opts) => {
    //get access to eveyrythng
    const title = opts.input.title;
    const description = opts.input.description;
    //do db stuff
    console.log("mock db call");
    return {
      id: "1",
    };
  }),
});

export type AppRouter = typeof appRouter;
