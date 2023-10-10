import React from "react";
import "../styles/InputSort.css";

const InputSort = () => {
  return (
    <div className="input_sort">
      <span>Сортировать по:</span>
      <select name="sort" id="sort" className="select_sort">
        <option value="straight_sort" className="opt_sort">
          А-Я
        </option>
        <option value="back_sort" className="opt_sort">
          Я-А
        </option>
      </select>
    </div>
  );
};

export default InputSort;
