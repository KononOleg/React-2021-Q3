import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import { About } from '../About/About.tsx';
import { Header } from '../Header/Header.tsx';
import { MainPage } from '../MainPage/MainPage.tsx';
import { NotFound } from '../NotFound/NotFound.tsx';

export function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
