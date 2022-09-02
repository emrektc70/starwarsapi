import { React, useState, Component } from "react";
import { useParams } from "react-router-dom";
import Dat from "./Dat.json";
import "./pages.css";

class PostList extends Component {
  render() {
    return (
      <div>
        {Dat.map((postDetail, index) => {
          return (
            <div>
              <h2>Nom : {postDetail.name}</h2>
              <p>Période de rotation: {postDetail.rotation_period}</p>
              <p>Période orbitale:{postDetail.orbital_period}</p>
              <p>Diameter: {postDetail.diameter}</p>
              <p>Climate: {postDetail.gravity}</p>
              <p>Gravité: {postDetail.terrain}</p>
              <p>Surface d'eau: {postDetail.surface_water}</p>
              <p>Population: {postDetail.population}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
export default PostList;
