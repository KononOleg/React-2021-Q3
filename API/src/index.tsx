import './styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from './pages/App/App.tsx';
import store from './redux/store';

window.onload = () => {
  document.body.classList.add('body');
  const root = document.createElement('div');
  document.body.append(root);
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    root,
  );
};
