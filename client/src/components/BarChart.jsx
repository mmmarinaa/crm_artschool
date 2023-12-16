import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: "Пол/Возраст (%)",
      position: "top",
    },
    legend: {
      position: "right",
    },
  },
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
      offset: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = [
  "до 18",
  "от 18 до 21",
  "от 21 до 24",
  "от 24 до 27",
  "от 27 до 30",
  "от 30 до 35",
  "от 35 до 45",
  "от 45",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Женщины",
      data: labels.map(() => faker.datatype.number({ min: 60, max: 100 })),
      backgroundColor: "rgb(77, 74, 123)",
      stack: "Stack 0",
    },
    {
      label: "Мужчины",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: "rgb(136, 133, 184)",
      stack: "Stack 1",
    },
  ],
};

const BarChart = ({ onRendered }) => {
  useEffect(() => {
    // Вызывайте колбэк, когда компонент отрисован
    if (onRendered) {
      onRendered();
    }
  }, [onRendered]);
  return <Bar options={options} data={data} />;
};

export default BarChart;
