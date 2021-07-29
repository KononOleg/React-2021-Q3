import React from "react";
import ReactDOM from "react-dom";
import { MainPage } from "./pages/MainPage/MainPage";

window.onload = () => {
  document.body.classList.add("body");

  ReactDOM.render(<MainPage />, document.body);
};
