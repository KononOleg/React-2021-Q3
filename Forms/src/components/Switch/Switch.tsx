import './Switch.scss';
import React from 'react';

interface IProps {
  isChecked: boolean;
  switchHandler: () => void;
}

export function Switch(props: IProps): JSX.Element {
  return (
    <label className="switch">
      <input type="checkbox" onChange={props.switchHandler} checked={props.isChecked}></input>
      <span className="slider"></span>
      <span className="switch__span span__train">no</span>
      <span className="switch__span span__play">yes</span>
    </label>
  );
}
