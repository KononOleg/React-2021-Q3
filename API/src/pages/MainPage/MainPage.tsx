import './MainPage.scss';
import React, { useEffect, useState } from 'react';
import { Header } from '../../components/header/Header.tsx';
import { getArticles } from '../../shared/api';
import { ICard } from '../../shared/interfaces/ICard';
import { Articles } from '../../components/Articles/Articles.tsx';

const PAGE_SIZE = 10;

export function MainPage(): JSX.Element {
  const [articles, setArticles] = useState([] as ICard[]);

  const [q, setQ] = useState('Sabaton');
  const [page, setPage] = useState(1);
  const fetchData = async (): Promise<void> => {
    setArticles(await getArticles(q, page, PAGE_SIZE));
  };
  useEffect(() => {
    setPage(1);
    fetchData();
  }, [q]);

  useEffect(() => {
    fetchData();
  }, [page]);

  const updateArticles = async (inputValue: string) => {
    setQ(inputValue);
  };
  return (
    <>
      <Header updateArticles={updateArticles} />
      <main className="main">
        {articles ? (
          <p>NO DATA</p>
        ) : (
          <>
            <Articles articles={articles} />
            <div>
              <button onClick={() => setPage(page - 1)}>prev</button>
              <button onClick={() => setPage(page + 1)}>next</button>
            </div>
          </>
        )}
      </main>
    </>
  );
}
