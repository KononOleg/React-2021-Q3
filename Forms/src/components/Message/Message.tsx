import './Message.scss';
import React from 'react';

export function Message(): JSX.Element {
  return (
    <>
      <div className="message__wrapper">
        <img src="./assets/icons/check.png" height="20px" width="20px" />
        <p className="message__text">Data saved successfully</p>
      </div>
    </>
  );
}
