import './Articles.scss';
import React from 'react';

import { Card } from '../Card/Card.tsx';
import { ICard } from '../../shared/interfaces/ICard';
import { NoDataScreen } from '../NoDataScreen/NoDataScreen.tsx';

interface IProps {
  articles: ICard[];
}

export function Articles(props: IProps): JSX.Element {
  return (
    <>
      {props.articles.length === 0 ? (
        <>
          <NoDataScreen />
        </>
      ) : (
        <>
          <div className="articles__wrapper">
            {props.articles.map((article: ICard, index) => (
              <Card image={article.image} author={article.author} name={article.name} date={article.date} key={index} />
            ))}
          </div>
        </>
      )}
    </>
  );
}
