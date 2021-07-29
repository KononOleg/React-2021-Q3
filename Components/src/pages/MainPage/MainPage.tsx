import "./MainPage.scss";
import React from "react";
import cards from "../../../public/cards/cards";
import { Card } from "../../components/card/Card";
import { Header } from "../../components/header/Header";

export function MainPage(): JSX.Element {
  return (
    <div>
      <Header />
      <main className="main">
        {cards.map((card, index) => (
          <Card image={card.image} site={card.site} contry={card.contry} date={card.date} author={card.author} authorImage={card.authorImage} key={index} />
        ))}
      </main>
    </div>
  );
}
