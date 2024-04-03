import { initTRPC } from "@trpc/server";

//create a trpc object
const t = initTRPC.create();

// export reusable objects instead export the router and the procedure.
export const router = t.router;
export const publicProcedure = t.procedure;
