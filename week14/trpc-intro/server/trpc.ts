import { initTRPC } from "@trpc/server";

//create a trpc object with the generic constraint which
// contains the type of the context.
const t = initTRPC.context<{ username: string }>().create();

// export reusable objects instead export the router and the procedure.
export const router = t.router;
export const publicProcedure = t.procedure;
