import './App.scss';
import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { About } from '../About/About.tsx';
import { Header } from '../Header/Header.tsx';
import { MainPage } from '../MainPage/MainPage.tsx';
import { NotFound } from '../NotFound/NotFound.tsx';
import { Details } from '../Details/Details.tsx';

export function App(): JSX.Element {
  const location = useLocation();
  return (
    <>
      <Header />
      <TransitionGroup component={null}>
        <CSSTransition timeout={600} classNames="pageSlider" key={location.key}>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/about" component={About} />
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}
