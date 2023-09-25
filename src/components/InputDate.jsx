import React from "react";
import "../styles/InputDate.css";

const InputDate = (props) => {
  const { label, id, ...inputProps } = props;
  return (
    <div className="form__input">
      <label>{label}</label>
      <input type="date" {...inputProps} className="my__input-date"></input>
    </div>
  );
};

export default InputDate;
