import './Header.scss';
import React, { useState } from 'react';

interface IProps {
  updateArticles: (inputValue: string, pageValue: number, pageSizeValue: number) => void;
  updateSortBy: (inputValue: string) => void;
  page: number;
  pageSize: number;
}

export function Header(props: IProps): JSX.Element {
  const [page, setPage] = useState(props.page);
  const [articleCount, setArticleCount] = useState(props.pageSize);

  const onChangeHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') props.updateArticles(e.currentTarget.value, page, articleCount);
  };

  const pageOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPage(e.currentTarget.value as unknown as number);
  };
  const articleCountOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setArticleCount(e.currentTarget.value as unknown as number);
  };

  const radioChange = (e: React.FormEvent<HTMLInputElement>) => {
    props.updateSortBy(e.currentTarget.value);
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
        <input type="radio" className="radio__input" id="radio-1" name="sort" value="publishedAt" checked onChange={radioChange} />
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
          <input type="number" className="header__input page_input" defaultValue={articleCount} onChange={articleCountOnChange} />
        </div>
      </div>
    </div>
  );
}
