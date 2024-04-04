import { publicProcedure, router } from "./trpc";
import { z } from "zod";
import { createHTTPServer } from "@trpc/server/adapters/standalone";

//validation on types with zod
const todoInputType = z.object({
  title: z.string(),
  description: z.string(),
  done: z.boolean(),
});

const signUpInputType = z.object({
  email: z.string(),
  password: z.string(),
});

//create a top level approuter
const appRouter = router({
  //defining a procedure
  //since update required , doing a mutation
  createTodo: publicProcedure.input(todoInputType).mutation(async (opts) => {
    //get access to eveyrythng
    console.log(opts.ctx.username);
    const title = opts.input.title;
    const description = opts.input.description;
    //do db stuff
    console.log("mock db call");
    return {
      id: "1",
    };
  }),
  signup: publicProcedure.input(signUpInputType).mutation(async (opts) => {
    let email = opts.input.email;
    let password = opts.input.password;
    //do db stuff here
    //jwt stuff and validataions here
    let token = "12345678";
    return {
      token,
    };
  }),
});

//expose via a simple httprouter from trpc
//adding a runtime context for these servers.
const server = createHTTPServer({
  router: appRouter,
  createContext(opts) {
    let authHeaders = opts.req.headers["authorization"];
    //do a jwt.verify here
    console.log(authHeaders);
    return {
      username: "Calling from the Context Window. Mock User Created",
    };
  },
});
server.listen(6969);
export type AppRouter = typeof appRouter;
