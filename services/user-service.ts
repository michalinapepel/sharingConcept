import create from "./http-service";

export interface User {
  id: number;
  name: string;
  lastName: string;
  email: string;
  password: string;
}

export default create("/users");
