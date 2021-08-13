import './NotFound.scss';
import React from 'react';

export function NotFound(): JSX.Element {
  return (
    <div className="not-found__wrapper">
      <p className="not-found__text  not-found__title">404</p>
      <p className="not-found__text  not-found__subtitle">Not Found</p>
    </div>
  );
}
