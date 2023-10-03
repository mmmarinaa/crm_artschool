import React from "react";
import "../styles/InputSearch.css";
import { BiSearch } from "react-icons/bi";

const InputSearch = () => {
  return (
    <div className="form__input">
      <form>
        <input type="text" className="my_input-search" placeholder="Поиск..." />
        <button type="submit" className="btn_search">
          <BiSearch color="#8884c2" fontSize="16px" />
        </button>
      </form>
    </div>
  );
};

export default InputSearch;
