import React from "react";
import "../styles/DropDownList.css";

const DropDownList = () => {
  return (
    <select>
      <option value="" selected disabled></option>
      <option className="opt__present">Был</option>
      <option className="opt__absence">Не был</option>
      <option className="opt__sick">Болеет</option>
      <option className="opt__diff">Другое</option>
    </select>
  );
};

export default DropDownList;
