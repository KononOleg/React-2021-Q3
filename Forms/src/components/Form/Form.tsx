import './Form.scss';
import React, { useEffect, useState } from 'react';
import { Switch } from '../Switch/Switch.tsx';

export function Form(): JSX.Element {
  const [textInput, setTextInput] = useState('');
  const [dateInput, setDateInput] = useState('');
  const [selectInput, setSelectInput] = useState('');
  const [checkboxInput, setCheckboxInput] = useState(false);
  const [switchInput, setSwitchInput] = useState(false);

  const [isFormValid, setIsFormValid] = useState(false);

  

  const [textInputError, setTextInputError] = useState('');
  const [dateInputError, setDateInputError] = useState('');
  const [selectInputError, setSelectInputError] = useState('');

  useEffect(() => {
    setIsFormValid(!isFormValid);
  }, [checkboxInput]);

  const textInputHandler = (e: React.FormEvent<HTMLInputElement>) => {
    if (!e.currentTarget.value) setTextInputError('не может быть пустым');
    else {
      setTextInputError('');
      setTextInput(e.currentTarget.value);
    }
  };

  const dateInputHandler = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value) setDateInputError('');
    setDateInput(e.currentTarget.value);
  };
  const checkboxInputHandler = () => {
    setCheckboxInput(!checkboxInput);
  };
  const selectInputHandler = (e: React.FormEvent<HTMLSelectElement>) => {
    if (e.currentTarget.value) setSelectInputError('');
    setSelectInput(e.currentTarget.value);
  };
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const switchInputHandler = () => {
    setSwitchInput(!switchInput);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <label className="label__error">
        <input type="text" className="input" placeholder="What is your name?" onChange={textInputHandler} />
        {textInputError && textInputError}
      </label>
      <label className="label__error">
        <input type="date" className="input input_date" data-placeholder="Bastille day" required aria-required="true" onChange={dateInputHandler} />
        {dateInputError && dateInputError}
      </label>
      <label className="label__error">
      <select defaultValue={'DEFAULT'} className="input" onChange={selectInputHandler}>
        <option value="DEFAULT" disabled>
          Choose your country
        </option>
        <option value="Kazakhstan">Kazakhstan</option>
        <option value="Ukraine">Ukraine</option>
        <option value="Mordor">Mordor</option>
        <option value="Pandora">Pandora</option>
      </select>
      {selectInputError && selectInputError}
      </label>
      <div className="switch__wrapper">
        <Switch switchHandler={switchInputHandler} />
        <p className="switch__text">Are you hungry?</p>
      </div>

      <label className="label">
        <input type="checkbox" name="happy" value="yes" onChange={checkboxInputHandler} />I agree with chipping
      </label>
      <button type="submit" className="button_submit" disabled={!!isFormValid}>
        Submit
      </button>
    </form>
  );
}
