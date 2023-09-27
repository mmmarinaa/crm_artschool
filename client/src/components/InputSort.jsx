import React from "react";
import "../styles/InputSort.css";

const InputSort = (props) => {
  return (
    <div className="">
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
