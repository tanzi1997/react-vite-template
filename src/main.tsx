import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";

import "./normalize.css";

import Router from "./router";
// import store from "./store";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      {/* <Provider store={store}> */}
      <Router />
      {/* </Provider> */}
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
