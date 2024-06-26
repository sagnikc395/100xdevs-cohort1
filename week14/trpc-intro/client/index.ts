//another backend server as client
// another node.js applications that will be used as a client

import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server";

//passing approuter as a generic here.
// lets the trpc object know what procedures are available on the server
// and their input/output types.

const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:6969",
      async headers() {
        return {
          // official way
          //  Authorization: "Bearer" + localStorage.getItem("token"),
          Authorization: "Bearer 123",
        };
      },
    }),
  ],
});

async function main() {
  let response = trpc.createTodo.mutate({
    title: "go to gym",
    description: "hit the gym",
    done: false,
  });
  console.log(response);

  let response2 = trpc.signup.mutate({
    email: "sagnik321@gmail.com",
    password: "123456",
  });
  console.log(response2);
}

main();
