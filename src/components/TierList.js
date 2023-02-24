import "../pages/HomePage.css";
import { Container } from "reactstrap";
import Tier from "./Tier";
import StartGrid from "../app/shared/StartGrid";
import { useState } from "react";

// Drop
// (push commit)
// Find row
// Get cell array
// if current row has 10 images - create 10 new cells with empty image objects
// Shift all image items to the right of the drop location one spot right
// Insert image cell at drop location
//
// Drag
//
// Find drage cell row and drag location
// If number of cells = 11 - shift all current images left
// Remove last 10 cells
//
// Update State with updated Grid

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
