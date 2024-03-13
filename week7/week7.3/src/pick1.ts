interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}

//for profile display, only pick the `name` and `email` fields
type UserProfile = Pick<User, "name" | "email">;

const displayUserProfile = (user: UserProfile) => {
  console.log(`Name: ${user.name}, Email: ${user.email}`);
};
