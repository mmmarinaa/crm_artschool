import React, { useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(ArcElement, Tooltip, Legend);

const uvazh = faker.datatype.number({ min: 10, max: 30 });
const neuvazh = faker.datatype.number({ min: 10, max: 15 });

export const data = {
  labels: [
    "Уважительная" +
      " " +
      " " +
      " " +
      " " +
      " " +
      " " +
      " " +
      " " +
      " " +
      " " +
      " " +
      " " +
      " " +
      " " +
      " " +
      " " +
      " " +
      " " +
      " " +
      " " +
      " " +
      " " +
      " " +
      " " +
      " " +
      " " +
      uvazh,
    "Неуважительная" +
      " " +
      " " +
      " " +
      " " +
      " " +
      " " +
      " " +
      " " +
      " " +
      " " +
      " " +
      " " +
      " " +
      " " +
      " " +
      " " +
      " " +
      " " +
      " " +
      " " +
      " " +
      " " +
      neuvazh,
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [uvazh, neuvazh],
      backgroundColor: ["rgba(77, 74, 123)", "rgba(136, 133, 184)"],
      borderColor: ["white", "white"],
      borderWidth: 5,
    },
  ],
};

export const options = {
  plugins: {
    legend: {
      position: "left",
      width: 500,
      labels: {
        boxWidth: 15,
        padding: 15,
        fontSize: 24,
      },
    },
  },
};

const PieChartPrichina = ({ onRendered }) => {
  useEffect(() => {
    // Вызывайте колбэк, когда компонент отрисован
    if (onRendered) {
      onRendered();
    }
  }, [onRendered]);
  return (
    <div className="pie_place">
      <h4>По причинам</h4>
      <span>(кол-во пропусков)</span>
      <Pie options={options} data={data} />
    </div>
  );
};

export default PieChartPrichina;
