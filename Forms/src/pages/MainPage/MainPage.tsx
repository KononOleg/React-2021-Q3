import "./MainPage.scss";
import React, { useState } from "react";
import { Form } from "../../components/Form/Form.tsx";
import { Card } from "../../components/Card/Card.tsx";
import { Message } from "../../components/Message/Message.tsx";
import { delay } from "../../shared/delay";

const MESSAGE_DELAY = 5;

export function MainPage(): JSX.Element {
  const [cards, setCards] = useState([] as JSX.Element[]);
  const [cardKey, setCardKey] = useState(0);
  const [message, setMessage] = useState([] as JSX.Element[]);

  const addCard = async (name: string, date: string, country: string, isHungry: boolean): Promise<void> => {
    setCards([<Card name={name} date={date} country={country} isHungry={isHungry} key={cardKey} />, ...cards]);
    setCardKey(cardKey + 1);
    setMessage([<Message key={1} />]);
    await delay(MESSAGE_DELAY);
    setMessage([]);
  };
  return (
    <>
      <main className="main">
        <Form addCard={addCard} />
        <div className="cards__wrapper">{cards}</div>
      </main>
      {message}
    </>
  );
}
