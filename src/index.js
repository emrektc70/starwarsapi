import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Planete from "./pages/Planete";
import Personnage from "./pages/Personnage";
import Home from "./Home";
import List from "./Components/List";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
