import './Card.scss';
import React from 'react';

interface IProps {
  image: string;
  name: string;
  date: string;
  author: string;
}

export function Card(props: IProps): JSX.Element {
  return (
    <div className="card__wrapper">
      <div className="card__image" style={{ backgroundImage: `url(${props.image})` }}></div>
      <div className="card__content">
        <div className="content__first-column">
          <p className="content__text content__text_bold">{props.name}</p>
        </div>
        <div className="content__second-column">
          <p className="content__text">{props.date}</p>
        </div>
      </div>
      <div className="card__footer">
        <p className="content__text">
          BY <span className="content__text_bold">{props.author}</span>
        </p>
      </div>
    </div>
  );
}