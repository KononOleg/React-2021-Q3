import './Header.scss';
import React from 'react';

export function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="box_left">
        <div className="burger__button">
          <span className="burger__span"></span>
        </div>
        <p className="burger__text">MENU</p>
      </div>
      <div className="box_right">
        <input type="text" className="header__input" placeholder="SEARCH FOR INSPIRATION (MEANING OF LIFE, PIZZA, ANIME, SABATON...)" />
        <div className="header__filters">
          <p className="filters__text">show filters</p>
        </div>
        <button className="header__button_close"></button>
      </div>
    </header>
  );
}
