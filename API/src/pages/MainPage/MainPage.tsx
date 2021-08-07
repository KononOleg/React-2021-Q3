import './MainPage.scss';
import React, { useEffect, useState } from 'react';
import { Header } from '../../components/header/Header.tsx';
import { getArticles } from '../../shared/api';
import { ICard } from '../../shared/interfaces/ICard';
import { Articles } from '../../components/Articles/Articles.tsx';
import { LoadScreen } from '../../components/LoadScreen/LoadScreen.tsx';

export function MainPage(): JSX.Element {
  const [cards, setCards] = useState([] as ICard[]);

  const [pending, setPending] = useState(false);

  const [q, setQ] = useState('Sabaton');
  const [sortBy, setSortBy] = useState('publishedAt');
  const [pageCount, setPageCount] = useState(0);

  const fetchData = async (page: number, pageSize: number): Promise<void> => {
    setPending(true);
    const { articles, count } = await getArticles(q, page, pageSize, sortBy);
    setCards(articles);
    setPending(false);
    setPageCount(Math.ceil(count / pageSize));
  };
  useEffect(() => {}, []);

  const updateSortBy = (inputValue: string, pageValue: number, pageSizeValue: number) => {
    setSortBy(inputValue);
    fetchData(pageValue, pageSizeValue);
  };

  const updateArticles = async (inputValue: string, pageValue: number, pageSizeValue: number) => {
    setQ(inputValue);
    fetchData(pageValue, pageSizeValue);
  };
  return (
    <>
      <Header updateArticles={updateArticles} updateSortBy={updateSortBy} />
      <main className="main">
        {pending ? (
          <LoadScreen />
        ) : (
          <>
            <Articles articles={cards} pageCount={pageCount} />
          </>
        )}
      </main>
    </>
  );
}
