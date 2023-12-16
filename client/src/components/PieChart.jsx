import React, { useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(ArcElement, Tooltip, Legend);

const risunok = faker.datatype.number({ min: 10, max: 30 });
const kompozicia = faker.datatype.number({ min: 1, max: 25 });
const zhivopis = faker.datatype.number({ min: 10, max: 15 });
const sculptura = faker.datatype.number({ min: 15, max: 20 });
const computer = faker.datatype.number({ min: 1, max: 12 });

export const data = {
  labels: [
    "Рисунок" +
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
      " " +
      " " +
      risunok,
    "Композиция" +
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
      kompozicia,
    "Живопись" +
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
      zhivopis,
    "Скульптура" +
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
      sculptura,
    "Компьютерная графика" + " " + " " + " " + " " + computer,
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [risunok, kompozicia, zhivopis, sculptura, computer],
      backgroundColor: [
        "rgba(77, 74, 123)",
        "rgba(191, 104, 166)",
        "rgba(154, 195, 79)",
        "rgba(255, 207, 86)",
        "rgba(136, 133, 184)",
      ],
      borderColor: ["white", "white", "white", "white", "white"],
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
      maxWidth: 600,
    },
  },
};

const PieChart = ({ onRendered }) => {
  useEffect(() => {
    // Вызывайте колбэк, когда компонент отрисован
    if (onRendered) {
      onRendered();
    }
  }, [onRendered]);
  return (
    <div className="pie_place">
      <h4>По дисциплинам </h4>
      <span>(кол-во пропусков)</span>
      <Pie options={options} data={data} />
    </div>
  );
};

export default PieChart;
