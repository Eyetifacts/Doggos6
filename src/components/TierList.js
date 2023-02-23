import "../pages/HomePage.css";
import { Container } from "reactstrap";
import Tier from "./Tier";
import StartGrid from "../app/shared/StartGrid";
import { useState } from "react";

// Drop
//
// Find drop cell row and drop location
// Collect Current Image Array
// Insert dropped Image to left of drop cell
// If Images = 11
// Add 10 new empty cells at the end of the cell Array
// Reparent shifted images to row(s)
//
// Drag
//
// Find drag cell row and drag location
// Collect Current Image Array for row
// Remove image from Array and shift images right
// If new image array has 10 elements - remove 10 empty row cells

const TierList = () => {
  const [tiers, setTiers] = useState(StartGrid);
  return (
    <Container className="myContainer">
      {tiers.map((tier) => {
        return <Tier key={tier.id} id={tier.id} cellArray={tier.cellArray} />;
      })}
    </Container>
  );
};

export default TierList;
