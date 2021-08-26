import './Details.scss';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NoDataScreen } from '../../components/NoDataScreen/NoDataScreen.tsx';
import { setArticle } from '../../redux/actions';
import { IStore } from '../../redux/reducer';

export function Details(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const article = useSelector((state: IStore) => state.article);

  const dispatch = useDispatch();

  const fetchData = async (): Promise<void> => {
    dispatch(setArticle(id));
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
