import React from "react";
import Checkbox from "./Checkbox";
import DropDownList from "./DropDownList";
import "../styles/Table.css";
import { GoPencil } from "react-icons/go";
import { BsCircleFill } from "react-icons/bs";

const Table = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>ФИО</th>
          <th>
            <p>пн, 1.05</p>
            <p>13:45</p>
          </th>
          <th>
            <p>пн, 1.05</p>
            <p>13:45</p>
          </th>
          <th>
            <p>пн, 1.05</p>
            <p>13:45</p>
          </th>
          <th>
            <p>пн, 1.05</p>
            <p>13:45</p>
          </th>
          <th>
            <p>пн, 1.05</p>
            <p>13:45</p>
          </th>
          <th>
            <p>пн, 1.05</p>
            <p>13:45</p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Иванова Татьяна</td>
          <td>
            <DropDownList />
          </td>
          <td>
            <DropDownList />
          </td>
          <td>
            <DropDownList />
          </td>
          <td>
            <DropDownList />
          </td>
          <td>
            <DropDownList />
          </td>
          <td>
            <DropDownList />
          </td>
        </tr>
        <tr>
          <td>Казаков Максим</td>
          <td>
            <DropDownList />
          </td>
          <td>
            <DropDownList />
          </td>
          <td>
            <DropDownList />
          </td>
          <td>
            <DropDownList />
          </td>
          <td>
            <DropDownList />
          </td>
          <td>
            <DropDownList />
          </td>
        </tr>
        <tr>
          <td>Кириллова Дарья</td>
          <td>
            <DropDownList />
          </td>
          <td>
            <DropDownList />
          </td>
          <td>
            <DropDownList />
          </td>
          <td>
            <DropDownList />
          </td>
          <td>
            <DropDownList />
          </td>
          <td>
            <DropDownList />
          </td>
        </tr>
        <tr>
          <td>Осипова Анастасия</td>
          <td>
            <DropDownList />
          </td>
          <td>
            <DropDownList />
          </td>
          <td>
            <DropDownList />
          </td>
          <td>
            <DropDownList />
          </td>
          <td>
            <DropDownList />
          </td>
          <td>
            <DropDownList />
          </td>
        </tr>
        <tr>
          <td>Сидоров Алексей</td>
          <td>
            <DropDownList />
          </td>
          <td>
            <DropDownList />
          </td>
          <td>
            <DropDownList />
          </td>
          <td>
            <DropDownList />
          </td>
          <td>
            <DropDownList />
          </td>
          <td>
            <DropDownList />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
