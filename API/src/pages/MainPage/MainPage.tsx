import './MainPage.scss';
import React, { useEffect, useState } from 'react';
import { Header } from '../../components/header/Header.tsx';
import { getArticles } from '../../shared/api';
import { ICard } from '../../shared/interfaces/ICard';
import { Articles } from '../../components/Articles/Articles.tsx';
import { LoadScreen } from '../../components/LoadScreen/LoadScreen.tsx';

const PAGE_SIZE = 10;

export function MainPage(): JSX.Element {
  const [articles, setArticles] = useState([] as ICard[]);

  const [pending, setPending] = useState(false);

  const [q, setQ] = useState('Sabaton');
  const [page, setPage] = useState(1);
  const [sortBy, seSortBy] = useState('publishedAt');

  const fetchData = async (): Promise<void> => {
    setPending(true);
    setArticles(await getArticles(q, page, PAGE_SIZE, sortBy));
    setPending(false);
  };
  useEffect(() => {
    setPage(1);
    fetchData();
  }, [q, sortBy]);

  useEffect(() => {
    fetchData();
  }, [page]);

  const updateSortBy = (inputValue: string) => {
    seSortBy(inputValue);
  };

  const updateArticles = async (inputValue: string) => {
    setQ(inputValue);
  };
  return (
    <>
      <Header updateArticles={updateArticles} updateSortBy={updateSortBy} />
      <main className="main">
        {pending ? (
          <LoadScreen />
        ) : (
          <>
            <Articles articles={articles} />
            {/*             <div>
              <button onClick={() => setPage(page - 1)}>prev</button>
              <button onClick={() => setPage(page + 1)}>next</button>
            </div> */}
          </>
        )}
      </main>
    </>
  );
}
