import './Form.scss';
import React from 'react';
import { Switch } from '../Switch/Switch.tsx';

export function Form(): JSX.Element {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <input type="text" className="input" placeholder="What is your name?" />
      <input type="date" className="input input_date" data-placeholder="Bastille day" required aria-required="true" />
      <select defaultValue={'DEFAULT'} className="input">
        <option value="DEFAULT" disabled>
          Choose your country
        </option>
        <option value="value2">Kazakhstan</option>
        <option value="value3">Ukraine</option>
        <option value="value3">Mordor</option>
        <option value="value3">Pandora</option>
      </select>
      <div className="switch__wrapper">
        <Switch />
        <p className="switch__text">Are you hungry?</p>
      </div>

      <label className="label">
        <input type="checkbox" name="happy" value="yes" />I agree with chipping
      </label>
      <button type="submit" className="button_submit">
        Submit
      </button>
    </form>
  );
}
