import React from "react";
import "../styles/SaveButton.css";

const SaveButton = ({ name, onClick }) => {
  return (
    <button className="save__button" onClick={onClick}>
      {name}
    </button>
  );
};

export default SaveButton;
