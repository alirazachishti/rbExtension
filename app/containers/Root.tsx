import React, { FC, useEffect } from "react";
import { Provider } from "react-redux";
import { Store } from "redux";
import App from "./App";

interface Props {
  store: Store;
}
const Root: FC<Props> = (props) => {
  const { store } = props;
  useEffect(() => {
    if (document?.body) document.body.style.margin = "0";
  }, []);
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
export default Root;
