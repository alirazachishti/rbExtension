import {
  ReducerActionInterface as RI,
} from "../common/interface";
import { Msg } from "../common/constants";
import { ILoginData } from "../hooks";
import { dispatch } from "../utils/state";

export const loginUser = (data: ILoginData): RI => 
  dispatch(Msg.LOGIN_USER, data);