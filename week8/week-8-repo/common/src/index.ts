//define all our zod types here
//npm install here

import { z } from "zod";

export const signupInput = z.object({
  username: z.string(),
  password: z.string(),
});

export const loginInput = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
});

export const todoInput = z.object({
  title: z.string().min(2).max(100),
  description: z.string().min(2).max(100),
});

//zod object type, that we can use in the frontend
// can import using monorepos.
//dont want the backend logic in the backend and just want a type
// to import them.
export type SignupParams = z.infer<typeof signupInput>;
export type LoginParams = z.infer<typeof loginInput>;
export type TodoInputParams = z.infer<typeof todoInput>;
