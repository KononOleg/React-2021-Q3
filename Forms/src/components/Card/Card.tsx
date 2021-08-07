import "./Card.scss";
import React from "react";
import { ICard } from "../../shared/interfaces/ICard";

export function Card(props: ICard): JSX.Element {
  return (
    <>
      <div className="card__wrapper">
        <p className="card__title">
          Name: <span className="card__text">{props.name}</span>
        </p>
        <p className="card__title">
          Bastille day: <span className="card__text">{props.date}</span>
        </p>
        <p className="card__title">
          Country: <span className="card__text">{props.country}</span>
        </p>
        <p className="card__title">
          Is this man hungry?: <span className="card__text">{props.isHungry ? "yep" : "no"}</span>
        </p>
      </div>
    </>
  );
}
