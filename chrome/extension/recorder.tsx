import React from "react";
import ReactDOM from "react-dom";
import Root from "../../app/containers/Root";
import configureStore from "../../app/store/configureStore";

chrome.storage.local.get("state", (obj) => {
  const { state } = obj;
  const initialState = JSON.parse(state || "{}");
  const store = configureStore(initialState);

  ReactDOM.render(<Root store={store} />, document.querySelector("#root"));
});
