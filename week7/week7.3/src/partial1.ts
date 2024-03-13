interface User {
  user_id: string;
  name: string;
  age: number;
  email: string;
  password: string;
}

type UpdatedProps = Pick<User, "name" | "age" | "email">;

type UpdatePropsOptional = Partial<UpdatedProps>;

async function updateUser(UpdatedProps: UpdatePropsOptional) {
  //do the db call async here ; update the user
  //...await db.Create()...
}

await updateUser({});


export { };

