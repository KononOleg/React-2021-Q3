import './MainPage.scss';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Header } from '../../components/header/Header.tsx';
import { getArticles } from '../../shared/api';
import { ICard } from '../../shared/interfaces/ICard';
import { Articles } from '../../components/Articles/Articles.tsx';
import { LoadScreen } from '../../components/LoadScreen/LoadScreen.tsx';
import { IStore } from '../../redux/reducer';

export function MainPage(): JSX.Element {
  const [cards, setCards] = useState([] as ICard[]);

  const [pending, setPending] = useState(false);
  const [pageCount, setPageCount] = useState(0);

  const q = useSelector((state: IStore) => state.q);
  const page = useSelector((state: IStore) => state.page);
  const pageSize = useSelector((state: IStore) => state.pageSize);
  const sortBy = useSelector((state: IStore) => state.sortBy);

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

  return (
    <>
      <Header page={page} pageSize={pageSize} />
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
