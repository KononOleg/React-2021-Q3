import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

export function Header(): JSX.Element {
  return (
    <header className="header">
      <NavLink exact to="/" className="navlink__item" activeClassName="navlink_active">
        <p className="navlink">Home</p>
      </NavLink>
      <NavLink to="/about" className="navlink__item" activeClassName="navlink_active">
        <p className="navlink">About</p>
      </NavLink>
    </header>
  );
}
