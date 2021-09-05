import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { InitialStateInterface } from "../common/interface";
import rootReducer from "../reducers";
import storage from "../utils/storage";

const enhancer: any = compose(applyMiddleware(thunk), storage());

export default function prod (initialState: InitialStateInterface) {
  return createStore(rootReducer, initialState, enhancer);
}
