import './Details.scss';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticle } from '../../shared/api';
import { ICard } from '../../shared/interfaces/ICard';
import { NoDataScreen } from '../../components/NoDataScreen/NoDataScreen.tsx';

export function Details(): JSX.Element {
  const { id } = useParams<{ id: string }>();

  const [article, setArticle] = useState(null as unknown as ICard);

  const fetchData = async (): Promise<void> => {
    setArticle(await getArticle(id));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {!article ? (
        <NoDataScreen />
      ) : (
        <div>
          <div className="details__wrapper">
            <a href={article.url} className="details__url">
              <img className="details__image" src={article.image} />
            </a>
            <div className="details__info">
              <p className="details__date">Site of Day {article.date}</p>
              <div className="box-info">
                <h2 className="info__name">{article.name}</h2>
                <p className="info__author">BY {article.author}</p>
              </div>
            </div>
          </div>
          <p className="details__title">{article.title}</p>
        </div>
      )}
    </>
  );
}
