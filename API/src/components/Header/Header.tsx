import './Header.scss';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setPage, setPageSize, setQ, setSortBy,
} from '../../redux/actions';
import { IStore } from '../../redux/reducer';

export function Header(): JSX.Element {
  const page = useSelector((state: IStore) => state.page);
  const pageSize = useSelector((state: IStore) => state.pageSize);
  const dispatch = useDispatch();

  const onChangeHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') dispatch(setQ(e.currentTarget.value as string));
  };

  const pageOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(setPage(e.currentTarget.value as unknown as number));
  };
  const articleCountOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(setPageSize(e.currentTarget.value as unknown as number));
  };

  const radioChange = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(setSortBy(e.currentTarget.value as string));
  };
  return (
    <div>
      <div className="box">
        <div className="box_left">
          <div className="burger__button">
            <span className="burger__span"></span>
          </div>
          <p className="burger__text">MENU</p>
        </div>
        <div className="box_right">
          <input type="text" className="header__input" placeholder="SEARCH FOR INSPIRATION (MEANING OF LIFE, PIZZA, ANIME, SABATON...)" onKeyDown={onChangeHandler} />
          <div className="header__filters">
            <p className="filters__text">show filters</p>
          </div>
          <button className="header__button_close"></button>
        </div>
      </div>
      <div className="box">
        <div className="lower-box__item item__text">
          <p>Sort By </p>
        </div>
        <input type="radio" className="radio__input" id="radio-1" name="sort" value="publishedAt" onChange={radioChange} />
        <label className="lower-box__item radio__item" htmlFor="radio-1">
          Date
        </label>
        <input type="radio" className="radio__input" id="radio-2" name="sort" value="author" onChange={radioChange} />
        <label className="lower-box__item radio__item" htmlFor="radio-2">
          Author
        </label>
        <input type="radio" className="radio__input" name="sort" id="radio-3" value="popularity" onChange={radioChange} />
        <label className="lower-box__item radio__item" htmlFor="radio-3">
          popularity
        </label>
        <div className="lower-box__item">
          <p>page:</p>
          <input type="number" className="header__input page_input" defaultValue={page} onChange={pageOnChange} />
        </div>
        <div className="lower-box__item">
          <p>items:</p>
          <input type="number" className="header__input page_input" defaultValue={pageSize} onChange={articleCountOnChange} />
        </div>
      </div>
    </div>
  );
}
