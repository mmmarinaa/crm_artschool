import React, { useState, useRef, useEffect } from "react";
import "../styles/DropDownList.css";

function DropDownList(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [previousDropdown, setPreviousDropdown] = useState(null);
  const { name } = props;
  let options = [];

  if (name === "attendance") {
    options = [
      { id: 1, text: "Был", color: "#BEE8B3", colorText: "#008000" },
      { id: 2, text: "Не был", color: "#FFB195", colorText: "#B33306" },
      { id: 3, text: "Болеет", color: "#FFF1CE", colorText: "#B98708" },
    ];
  } else {
    options = [
      { id: 1, text: "5", color: "#BEE8B3", colorText: "#008000" },
      { id: 2, text: "4", color: "#FFF1CE", colorText: "#B98708" },
      { id: 3, text: "3", color: "#E3E3E3", colorText: "#6C6C6C" },
      { id: 4, text: "2", color: "#FFB195", colorText: "#B33306" },
    ];
  }

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setPreviousDropdown(name);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleDocumentClick);
    }

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isOpen]);

  useEffect(() => {
    if (previousDropdown && previousDropdown !== name) {
      setIsOpen(false);
    }
  }, [name, previousDropdown]);

  return (
    <div
      className={`dropdown ${isOpen ? "show" : ""}`}
      onClick={toggleDropdown}
      ref={dropdownRef}
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
