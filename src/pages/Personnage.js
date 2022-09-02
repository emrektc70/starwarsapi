import { React, useState, Component } from "react";
import Per from "./Per.json";

class PostList extends Component {
  render() {
    return (
      <div>
        {Per.map((postDetail, index) => {
          return (
            <div>
              <h2>Nom {postDetail.name}</h2>
              <p>Taille: {postDetail.height}</p>
              <p>Poids: {postDetail.mass}</p>
              <p>Couleur de cheveux: {postDetail.hair_color}</p>
              <p>Couleur de peau: {postDetail.skin_color}</p>
              <p>couleur des yeux: {postDetail.eye_color}</p>
              <p>Année de naissance: {postDetail.birth_year}</p>
              <p>Genre: {postDetail.gender}</p>
              <p>Monde natal: {postDetail.homeworld}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
export default PostList;
