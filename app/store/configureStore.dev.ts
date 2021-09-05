import { applyMiddleware, createStore, compose, Store } from "redux";
import thunk from "redux-thunk";
import { InitialStateInterface } from "../common/interface";
import rootReducer from "../reducers";
import storage from "../utils/storage";

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Options: http://zalmoxisus.github.io/redux-devtools-extension/API/Arguments.html
    })
  : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk), storage());

export default function dev (initialState: InitialStateInterface) {
  const store: Store = createStore(rootReducer, initialState, enhancer);
  if (module.hot) {
    module.hot.accept("../reducers", () => {
      const nextRootReducer = require("../reducers");
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
