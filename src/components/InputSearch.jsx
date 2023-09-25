import React from "react";
import "../styles/InputSearch.css";

const InputSearch = () => {
  return (
    <div className="form__input">
      <form>
        <input type="text" className="my_input-search" placeholder="Поиск..." />
        <button type="submit" className="btn_search">
          Поиск
        </button>
      </form>
    </div>
  );
};

export default InputSearch;
