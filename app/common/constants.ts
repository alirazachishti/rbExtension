import { UserStateInterface } from "./interface";


export enum Msg {
  LOGIN_USER = "LOGIN_USER",
}
export const initialUserState: UserStateInterface = {
  email: "",
};
