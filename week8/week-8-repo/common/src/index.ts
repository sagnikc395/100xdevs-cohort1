//define all our zod types here
//npm install here

import { z } from "zod";

export const signupInput = z.object({
  username: z.string(),
  password: z.string(),
});

//zod object type, that we can use in the frontend
// can import using monorepos.
//dont want the backend logic in the backend and just want a type 
// to import them.
export type SignupParams = z.infer<typeof signupInput>;
