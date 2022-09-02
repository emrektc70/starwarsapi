import { useParams } from "react-router-dom";
import Per from "./Per.json";

const Slt = () => {
  const { name } = useParams();

  console.log(name);

  return (
    <div className="personnage-info">
      <h2>Info Personnage {name}</h2>

      <h3> Taille: {Per[0].height} </h3>
      <h3> Poids: {Per[0].mass} </h3>
      <h3> Couleur de cheveux: {Per[0].hair_color} </h3>
      <h3> Couleur de peau: {Per[0].skin_color} </h3>
      <h3> couleur des yeux: {Per[0].eye_color} </h3>
    </div>
  );
};

export default Slt;
