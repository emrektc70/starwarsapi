import { React, useState } from "react";
import Dat from "../pages/Dat.json";
import { Link } from "react-router-dom";
import "./index.css";

function List(props) {
  const filteredData = Dat.filter((el) => {
    if (props.input === "") {
      return el;
    } else {
      return el.name.toLowerCase().includes(props.input);
    }
  });
  return (
    <ul>
      {filteredData.map((item) => (
        <li key={item.name}>
          <Link
            to={`/Info/${item.name}`}
            style={{ paddingLeft: 13, textDecoration: "none" }}
          >
            <br />
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default List;
