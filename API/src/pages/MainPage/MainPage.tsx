import './MainPage.scss';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../../components/header/Header.tsx';
import { Articles } from '../../components/Articles/Articles.tsx';
import { LoadScreen } from '../../components/LoadScreen/LoadScreen.tsx';
import { IStore } from '../../redux/reducer';
import { setArticles } from '../../redux/actions';

export function MainPage(): JSX.Element {
  const dispatch = useDispatch();
  const articles = useSelector((state: IStore) => state.articles);
  const q = useSelector((state: IStore) => state.q);
  const page = useSelector((state: IStore) => state.page);
  const pageSize = useSelector((state: IStore) => state.pageSize);
  const sortBy = useSelector((state: IStore) => state.sortBy);
  const pending = useSelector((state: IStore) => state.pending);
  const pageCount = useSelector((state: IStore) => state.pageCount);

  const fetchData = async (): Promise<void> => {
    dispatch(setArticles(q, page, pageSize, sortBy));
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
            <Articles articles={articles} pageCount={pageCount} />
          </>
        )}
      </main>
    </>
  );
}
