import React, { useState } from "react";
import "../styles/DropDownList.css";

function DropDownList(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { id: 1, text: "Был", color: "#BEE8B3", colorText: "#008000" },
    { id: 2, text: "Не был", color: "#FFB195", colorText: "#B33306" },
    { id: 3, text: "Болеет", color: "#FFF1CE", colorText: "#B98708" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div
      className={`dropdown ${isOpen ? "show" : ""}`}
      onClick={toggleDropdown}
    >
      <div className="dropdown-header">
        {selectedOption ? (
          <div
            className="selected"
            style={{
              backgroundColor: selectedOption.color,
              color: selectedOption.colorText,
            }}
          >
            {selectedOption.text}
          </div>
        ) : (
          ""
        )}
      </div>
      <ul className={`dropdown-list ${isOpen ? "show" : ""}`}>
        {options.map((option) => (
          <li
            key={option.id}
            onClick={() => handleSelectOption(option)}
            style={{ backgroundColor: option.color, color: option.colorText }}
          >
            {option.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropDownList;
