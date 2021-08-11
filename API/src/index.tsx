import './styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './pages/App/App.tsx';

window.onload = () => {
  document.body.classList.add('body');
  const root = document.createElement('div');
  document.body.append(root);
  ReactDOM.render(<App />, root);
};
