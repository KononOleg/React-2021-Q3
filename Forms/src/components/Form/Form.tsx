import "./Form.scss";
import React, { useEffect, useState } from "react";

const SELECT_DEFAULT = "DEFAULT";

interface IProps {
  addCard: (name: string, date: string, country: string, isHungry: boolean) => void;
}

export function Form(props: IProps): JSX.Element {
  const [textInput, setTextInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [selectInput, setSelectInput] = useState(SELECT_DEFAULT);
  const [checkboxInput, setCheckboxInput] = useState(false);
  const [switchInput, setSwitchInput] = useState(true);

  const [isFormValid, setIsFormValid] = useState(false);

  const [dateInputType, setDateInputType] = useState("text");

  const [textInputError, setTextInputError] = useState("");
  const [dateInputError, setDateInputError] = useState("");
  const [selectInputError, setSelectInputError] = useState("");

  useEffect(() => {
    setIsFormValid(!isFormValid);
  }, [checkboxInput]);

  const textInputHandler = (e: React.FormEvent<HTMLInputElement>) => {
    if (!e.currentTarget.value) setTextInputError("Name cannot be blank");
    else if (!/^[^(~ ! @ # $ % * () _ — + = | : ; " ' ` < > , . ? / ^0-9)]*$/.test(e.currentTarget.value)) {
      setTextInputError("Name cannot contain digits");
    } else {
      setTextInputError("");
    }
    setTextInput(e.currentTarget.value);
  };

  const dateInputHandler = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value) setDateInputError("");
    setDateInput(e.currentTarget.value);
  };
  const checkboxInputHandler = () => {
    setCheckboxInput(!checkboxInput);
  };
  const selectInputHandler = (e: React.FormEvent<HTMLSelectElement>) => {
    if (e.currentTarget.value) setSelectInputError("");
    setSelectInput(e.currentTarget.value);
  };
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let isError = false;
    if (!textInput) {
      setTextInputError("Name cannot be blank");
      isError = true;
    }
    if (selectInput === SELECT_DEFAULT) {
      setSelectInputError("Country cannot be blank");
      isError = true;
    }
    if (!dateInput) {
      setDateInputError("Date cannot be blank");
      isError = true;
    }

    if (!isError) {
      props.addCard(textInput, dateInput, selectInput, switchInput);
      setTextInput("");
      setDateInput("");
      setSelectInput(SELECT_DEFAULT);
      setSwitchInput(true);
      setCheckboxInput(false);
      setDateInputType("text");
    }
  };
  const switchInputHandler = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === "yes") setSwitchInput(true);
    else setSwitchInput(false);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <label className="label__error">
        <input type="text" className={`input ${textInputError && "input_error"}`} placeholder="What is your name?" onChange={textInputHandler} value={textInput} />
        {textInputError && textInputError}
      </label>
      <label className="label__error">
        <input
          type={dateInputType}
          className={`input ${dateInputError && "input_error"}`}
          onChange={dateInputHandler}
          value={dateInput}
          placeholder="Bastille day"
          onMouseDown={() => setDateInputType("date")}
        />
        {dateInputError && dateInputError}
      </label>
      <label className="label__error">
        <select value={selectInput} className={`input ${selectInputError && "input_error"}`} onChange={selectInputHandler}>
          <option value={SELECT_DEFAULT} disabled>
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
        <p className="form__text">Are you hungry?</p>
        <label className="">
          <input type="radio" name="radio" value="yes" checked={switchInput} onChange={switchInputHandler} />
          yes
        </label>
        <label className="">
          <input type="radio" name="radio" value="no" checked={!switchInput} onChange={switchInputHandler} />
          no
        </label>
      </div>

      <label className="label">
        <input type="checkbox" onChange={checkboxInputHandler} checked={checkboxInput} style={{ cursor: "pointer" }} />I agree with chipping
      </label>
      <button type="submit" className="button_submit" disabled={isFormValid}>
        Submit
      </button>
    </form>
  );
}
