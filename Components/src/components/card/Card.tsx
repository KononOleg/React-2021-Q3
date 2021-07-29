import "./Card.scss";
import React from "react";

interface IProps {
  image: string;
  site: string;
  contry: string;
  date: string;
  author: string;
  authorImage: string;
}

export function Card(props: IProps): JSX.Element {
  return (
    <div className="card__wrapper">
      <div className="card__image" style={{ backgroundImage: `url(./${props.image})` }}></div>
      <div className="card__content">
        <div className="content__first-column">
          <p className="content__text">{props.site}</p>
        </div>
        <div className="content__second-column">
          <p className="content__text">{`From ${props.contry}`}</p>
          <p className="content__text">{props.date}</p>
        </div>
      </div>
      <div className="card__footer">
        <img className="footer__author-image" src={`./${props.authorImage}`} />
        <p className="content__text">{`BY ${props.author}`}</p>
      </div>
    </div>
  );
}
