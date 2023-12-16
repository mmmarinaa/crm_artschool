import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Store from "./store/store";
import UserStore from "./store/UserStore";
import JournalStore from "./store/JournalStore";
import ScheduleStore from "./store/ScheduleStore";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      journal: new JournalStore(),
      schedule: new ScheduleStore(),
    }}
  >
    <App />
  </Context.Provider>
);
