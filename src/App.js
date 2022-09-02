import { Routes, Route, NavLink, useParams, Switch } from "react-router-dom";
import Home from "./Home";
import Personnage from "./pages/Personnage";
import Planete from "./pages/Planete";
import "./index.css";
import Info from "./pages/Plainfo";
import Slt from "./pages/Perinfo";
import { BiWorld } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { ImHome } from "react-icons/im";

function App() {
  return (
    <>
      <div
        className="nav"
        style={{
          display: "flex",
          alignItems: "right",
          justifyContent: "right",
        }}
      >
        {" "}
        <img
          src="/image/starwars.png"
          style={{
            paddingRight: 100,
            textDecoration: "none",
            color: "white",
            marginTop: "10px",
          }}
        />
        <NavLink
          to="/"
          style={{
            paddingLeft: 13,
            textDecoration: "none",
            color: "white",
            marginTop: "10px",
          }}
        >
          <ImHome
            style={{
              paddingLeft: 13,
              textDecoration: "none",
              color: "white",
              marginTop: "10px",
            }}
          />{" "}
          Home
        </NavLink>
        <NavLink
          to="/planete"
          style={{
            paddingLeft: 13,
            textDecoration: "none",
            color: "white",
            marginTop: "10px",
          }}
        >
          <BiWorld
            style={{
              paddingLeft: 13,
              textDecoration: "none",
              color: "white",
              marginTop: "10px",
            }}
          />{" "}
          Voir Les planetes
        </NavLink>
        <NavLink
          to="/Personnage"
          style={{
            paddingLeft: 13,
            textDecoration: "none",
            color: "white",
            marginTop: "10px",
          }}
        >
          <FaUserAlt
            style={{
              paddingLeft: 13,
              textDecoration: "none",
              color: "white",
              marginTop: "10px",
            }}
          />
          {"   "}
          Les Personnages
        </NavLink>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Planete" element={<Planete />}></Route>
        <Route path="/Info/:name" element={<Info />}></Route>

        <Route path="/Personnage" element={<Personnage />}></Route>
        <Route path="/PersonnageInfo/:name" element={<Slt />}></Route>
      </Routes>
    </>
  );
}

export default App;
