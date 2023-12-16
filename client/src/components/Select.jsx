import React from "react";
import "../styles/Select.css";
import { IoSettingsOutline } from "react-icons/io5";

const Select = (props) => {
  return (
    <div className="input_subj">
      <label>Дисциплина:</label>
      <select name="sort" id="sort" className="select_subj">
        <option value="straight_sort" className="opt_sort">
          Рисунок
        </option>
        <option value="back_sort" className="opt_sort">
          Живопись
        </option>
        <option value="back_sort" className="opt_sort">
          Скульптура
        </option>
        <option value="back_sort" className="opt_sort">
          Композиция
        </option>
        <option value="back_sort" className="opt_sort">
          Компьютерная графика
        </option>
      </select>
    </div>
  );
};

export default Select;
