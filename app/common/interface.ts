import { Msg } from "./constants";

export interface ReducerActionInterface {
  type: Msg;
  data?: object;
}

export interface UserStateInterface {
  email: string;
  isEmployee?: boolean;
}

export interface InitialStateInterface {
  user?: UserStateInterface;
}
