import './MainPage.scss';
import React, { useEffect, useState } from 'react';
import { Header } from '../../components/header/Header.tsx';
import { getArticles } from '../../shared/api';
import { ICard } from '../../shared/interfaces/ICard';
import { Articles } from '../../components/Articles/Articles.tsx';
import { LoadScreen } from '../../components/LoadScreen/LoadScreen.tsx';

const PAGE = 1;
const PAGE_SIZE = 12;
const Q = 'Sabaton';
const SORT_BY = 'publishedAt';

export function MainPage(): JSX.Element {
  const [cards, setCards] = useState([] as ICard[]);

  const [pending, setPending] = useState(false);

  const [q, setQ] = useState(Q);
  const [sortBy, setSortBy] = useState(SORT_BY);
  const [page, setPage] = useState(PAGE);
  const [pageSize, setPageSize] = useState(PAGE_SIZE);
  const [pageCount, setPageCount] = useState(0);

  const fetchData = async (): Promise<void> => {
    setPending(true);
    const { articles, count } = await getArticles(q, page, pageSize, sortBy);
    setCards(articles);
    setPending(false);
    setPageCount(Math.ceil(count / pageSize));
  };
  useEffect(() => {
    fetchData();
  }, [q, sortBy, page, pageSize]);

  const updateSortBy = (inputValue: string) => {
    setSortBy(inputValue);
  };

  const updateArticles = async (inputValue: string, pageValue: number, pageSizeValue: number) => {
    setQ(inputValue);
    setPage(pageValue);
    setPageSize(pageSizeValue);
  };
  return (
    <>
      <Header updateArticles={updateArticles} updateSortBy={updateSortBy} page={page} pageSize={pageSize} />
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
