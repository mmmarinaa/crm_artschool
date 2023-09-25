import React from "react";
import Sidebar from "../components/Sidebar";
import Tabs from "../components/Tabs";
import InputSearch from "../components/InputSearch";

function Journal() {
  return (
    <div>
      <Sidebar />
      <div className="content_page">
        <header>
          <h3>Журнал</h3>
        </header>
        <Tabs />
      </div>
    </div>
  );
}

export default Journal;
