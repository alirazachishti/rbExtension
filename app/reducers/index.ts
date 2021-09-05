import { combineReducers } from "redux";
import {
  ReducerActionInterface as RI,
  UserStateInterface,
} from "../common/interface";
import user from "./user";

export interface AppStateInterface {
  user: UserStateInterface;
}

const appReducer = combineReducers<AppStateInterface>({
  user,
});

const rootReducer = (state: AppStateInterface | undefined, action: RI) => {
  return appReducer(state, action);
};

export default rootReducer;
