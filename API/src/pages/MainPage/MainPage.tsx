import "./MainPage.scss";
import React from "react";
import { Header } from "../../components/header/Header.tsx";

export function MainPage(): JSX.Element {
  return (
    <>
      <Header />
      <main className="main"></main>
    </>
  );
}
