import './Header.scss';
import React from 'react';

interface IProps {
  updateArticles: (q: string) => void;
}

export function Header(props: IProps): JSX.Element {
  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    props.updateArticles(e.currentTarget.value);
  };
  return (
    <header className="header">
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
    </header>
  );
}
