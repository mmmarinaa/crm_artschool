import React, { useState, useContext } from "react";
import Sidebar from "../components/Sidebar";
import Tabs from "../components/Tabs";
import InputSearch from "../components/InputSearch";
import Clock from "../components/Clock";
import Settings from "../components/Settings";
import Profile from "../components/Profile";
import InputDate from "../components/InputDate";
import BarChart from "../components/BarChart";
import { IoExitOutline } from "react-icons/io5";
import Select from "../components/Select";
import PieChart from "../components/PieChart";
import SaveButton from "../components/SaveButton";
import PieChartPrichina from "../components/PieChartPrichina";
import { useNavigate } from "react-router-dom";
import { Context } from "../index";
import { LOGIN_ROUTE } from "../utils/consts";

function Reports() {
  const name = "Показать";
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const inputs = [
    {
      id: 1,
      name: "date-from",
      label: "Дата с:",
    },
    {
      id: 2,
      name: "date-to",
      label: "Дата по:",
    },
  ];
  const logout = () => {
    user.setUser({});
    user.setIsAuth(false);
    navigate(LOGIN_ROUTE);
  };

  const [chartsVisible, setChartsVisible] = useState(false);
  const [inputValues, setInputValues] = useState({
    "date-from": "",
    "date-to": "",
  });
  const [validationError, setValidationError] = useState("");
  const [forceRerender, setForceRerender] = useState(false);

  const handleInputChange = (name, value) => {
    setInputValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const toggleChartsVisibility = () => {
    const { "date-from": dateFrom, "date-to": dateTo } = inputValues;

    if (!dateFrom || !dateTo) {
      setValidationError("Введите значения для формирования отчета");
    } else if (dateFrom > dateTo) {
      setValidationError(
        "Дата окончания периода не может быть меньше, чем дата начала"
      );
    } else {
      setChartsVisible(!chartsVisible);
      setValidationError("");
      setForceRerender(true);
    }
  };
  const handleChartsRendered = () => {
    setForceRerender(false);
  };
  return (
    <div>
      <Sidebar />
      <div className="content_page">
        <header>
          <div className="left_content">
            <h3>Анализ посещаемости</h3>
          </div>
          <div className="right_content">
            <Clock />
            <Settings />
            <Profile />
            <button onClick={() => logout()} className="exit" title="Выйти">
              <IoExitOutline className="icon" />
            </button>
          </div>
        </header>
        <div className="content_pages">
          {validationError && (
            <div className="elements_space">
              <p style={{ color: "red" }}>{validationError}</p>
            </div>
          )}
          <div className="elements__space">
            <Select />
            {inputs.map((input) => (
              <InputDate
                key={input.id}
                {...input}
                value={inputValues[input.name]}
                onChange={(value) => handleInputChange(input.name, value)}
                max={new Date().toISOString().split("T")[0]}
              />
            ))}
            <SaveButton name={name} onClick={toggleChartsVisibility} />
          </div>
          {chartsVisible && (
            <div className="charts" key={forceRerender}>
              <BarChart onRendered={handleChartsRendered} />
              <PieChart onRendered={handleChartsRendered} />
              <PieChartPrichina onRendered={handleChartsRendered} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Reports;
