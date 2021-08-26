import './NoDataScreen.scss';
import React from 'react';

export function NoDataScreen(): JSX.Element {
  return (
    <>
      <div className="no-data__wrapper">
        <p className="no-data__text">No match</p>
      </div>
    </>
  );
}
