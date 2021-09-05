import { InitialStateInterface } from "../common/interface";
import dev from "./configureStore.dev";
import prod from "./configureStore.prod";

export default function configure (initialState: InitialStateInterface) {
  if (process.env.NODE_ENV === "production") return prod(initialState);
  else return dev(initialState);
};
