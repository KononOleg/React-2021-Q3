import './MainPage.scss';
import React, { useState } from 'react';
import { Header } from '../../components/header/Header.tsx';
import { getArticles } from '../../shared/api';
import { Card } from '../../components/Card/Card.tsx';
import { ICard } from '../../shared/interfaces/ICard';

export function MainPage(): JSX.Element {
  const [articles, setArticles] = useState([] as ICard[]);

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const updateArticles = async (q: string) => {
    setArticles(await getArticles(q, page, pageSize));
  };
  return (
    <>
      <Header updateArticles={updateArticles} />
      <main className="main">
        <div className="articles__wrapper">
          {articles.map((article: ICard, index) => (
            <Card image={article.image} author={article.author} name={article.name} date={article.date} key={index} />
          ))}
        </div>
      </main>
    </>
  );
}
