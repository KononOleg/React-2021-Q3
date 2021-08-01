import './Switch.scss';
import React from 'react';

export function Switch(): JSX.Element {
  return (
    <label className="switch">
      <input type="checkbox"></input>
      <span className="slider"></span>
      <span className="switch__span span__train">no</span>
      <span className="switch__span span__play">yes</span>
    </label>
  );
}
