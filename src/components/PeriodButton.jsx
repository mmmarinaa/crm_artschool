import React from "react";
import "../styles/PeriodButton.css";

const PeriodButton = (props) => {
  const { id, name } = props;
  return (
    <button id={id} className="period__button">
      {name}
    </button>
  );
};

export default PeriodButton;
