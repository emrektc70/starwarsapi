import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "./Components/List";
import User from "./Components/ListUser";
import "./index.css";
import "./pages/pages.css";
import { TiStarFullOutline } from "react-icons/ti";
import { BiWorld } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";

export default function Text() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="main">
      <h1 className="name">
        <TiStarFullOutline /> Star Wars <TiStarFullOutline />
      </h1>
      <div
        className="search"
        style={{
          paddingLeft: 800,
          marginBottom: 100,
          display: "flex",
        }}
      >
        <h3
          style={{
            display: "flex",
          }}
        >
          Recherche:
        </h3>
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Que cherchez-vous ?"
        />
      </div>
      <h1 className="name">
        {" "}
        <BiWorld /> Planète <BiWorld />{" "}
      </h1>
      <List input={inputText} />
      <h1 className="name">
        {" "}
        <FaUserAlt /> Personnage <FaUserAlt />{" "}
      </h1>
      <User input={inputText} />
    </div>
  );
}
