import './Header.scss';
import React from 'react';

interface IProps {
  updateArticles: (inputValue: string) => void;
  updateSortBy: (inputValue: string) => void;
}

export function Header(props: IProps): JSX.Element {
  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    props.updateArticles(e.currentTarget.value);
  };

  const radioChange = (e: React.FormEvent<HTMLInputElement>) => {
    props.updateSortBy(e.currentTarget.value);
  };
  return (
    <header className="header">
      <div className="box">
        <div className="box_left">
          <div className="burger__button">
            <span className="burger__span"></span>
          </div>
          <p className="burger__text">MENU</p>
        </div>
        <div className="box_right">
          <input type="text" className="header__input" placeholder="SEARCH FOR INSPIRATION (MEANING OF LIFE, PIZZA, ANIME, SABATON...)" onChange={onChangeHandler} />
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
        <input type="radio" className="radio__input" name="sort" id="radio-3" value="name" onChange={radioChange} />
        <label className="lower-box__item radio__item" htmlFor="radio-3">
          Name
        </label>
      </div>
    </header>
  );
}
