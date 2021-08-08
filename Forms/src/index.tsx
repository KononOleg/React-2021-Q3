import "./styles.scss";
import React from "react";
import ReactDOM from "react-dom";
import { MainPage } from "./pages/MainPage/MainPage.tsx";

window.onload = () => {
  document.body.classList.add("body");
  const root = document.createElement("div");
  document.body.append(root);
  ReactDOM.render(<MainPage />, root);
};
