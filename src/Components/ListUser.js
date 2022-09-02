import { React, useState } from "react";
import Per from "../pages/Per.json";
import { Link } from "react-router-dom";

function User(props) {
  const filteredData = Per.filter((el) => {
    if (props.input === "") {
      return el;
    } else {
      return el.name.toLowerCase().includes(props.input);
    }
  });
  return (
    <ul>
      {filteredData.map((item) => (
        <Link to={`/PersonnageInfo/${item.name}`}>
          <li key={item.id}>{item.name} </li>
        </Link>
      ))}
    </ul>
  );
}

export default User;
