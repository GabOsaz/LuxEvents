import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from './redux/store/store';
import "../node_modules/font-awesome/css/font-awesome.min.css"




ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.Fragment>
        <App />
      </React.Fragment>
    </BrowserRouter>,
  </Provider>,
  document.getElementById("root")
);
