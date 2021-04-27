import React from "react";
import ReactDOM from "react-dom";
import App from "./src/App";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { reducers } from "./src/store/reducers";
import dayjs from "dayjs";
import { getAsteroids } from "./src/api/api";

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
