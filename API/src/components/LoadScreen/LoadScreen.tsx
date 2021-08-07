import './LoadScreen.scss';
import React from 'react';

export function LoadScreen(): JSX.Element {
  return (
    <>
      <div className="load-screen__wrapper">
        <img className="load-screen__image" src="./assets/icons/loading.png" />
      </div>
    </>
  );
}
