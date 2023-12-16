import React from "react";
import "../styles/InputDate.css";

const InputDate = (props) => {
  const { label, id, value, onChange, ...inputProps } = props;
  const handleChange = (event) => {
    const newValue = event.target.value;
    onChange(newValue);
  };
  return (
    <div className="form__input">
      <label>{label}</label>
      <input
        type="date"
        {...inputProps}
        value={value}
        onChange={handleChange}
        className="my__input-date"
      ></input>
    </div>
  );
};

export default InputDate;
