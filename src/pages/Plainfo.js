import { useParams } from "react-router-dom";

const Info = () => {
  const { name } = useParams();

  console.log(name);

  return (
    <div className="personnage-info">
      <h2>Info Personnage {name}</h2>

      <h3> Période de rotation:</h3>
      <h3> Période orbitale: </h3>
      <h3> Diameter: </h3>
      <h3> Climate: </h3>
      <h3> Gravité: </h3>
      <h3> Surface d'eau: </h3>
      <h3> Population: </h3>
    </div>
  );
};

export default Info;
