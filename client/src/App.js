import React, { useContext, useEffect, useState } from "react";
import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Journal from "./pages/Journal";
import Reports from "./pages/Reports";
import Help from "./pages/Help";
import Schedule from "./pages/Schedule";
import Settings from "./pages/Settings";
import Auth from "./pages/Auth";
import AppRouter from "./components/AppRouter";
import { observer } from "mobx-react-lite";
import { Context } from "./index";
import { check } from "./http/userAPI";

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      check()
        .then((data) => {
          user.setUser(true);
          user.setIsAuth(true);
        })
        .finally(() => setLoading(false));
    }, 1000);
  }, []);

  if (loading) {
    return <div>Загрузка</div>;
  }
  return (
    <BrowserRouter>
      <AppRouter />
      {/* <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/help" element={<Help />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/settings" element={<Settings />} />
      </Routes> */}
    </BrowserRouter>
  );
});

export default App;
