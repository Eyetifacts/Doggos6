import "../pages/HomePage.css";
import { Container } from "reactstrap";
import Tier from "./Tier";
import StartGrid from "../app/shared/StartGrid";
import { useState } from "react";
import Header from "./Header";

// Drop
//
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

  // tierUpdateHandler should update the state as indicated above
  //
  const tierUpdateHandler = (imageId, dragCell, dropCell) => {
    const emptyImage = {
      type: "",
      draggable: false,
      imageId: "",
      imageString: null,
      imageUrl: "",
      dropImgParent: "",
    };

    setTiers((prevState) => {
      let newGrid = prevState;
      newGrid[5].cellArray[1].image = emptyImage;

      // I needed to return an object of prevState.  I put i regular () needed to be brackets for object {}
      // return {...prevState, prevState[5].cellArray[1].image: emptyImage}
      return newGrid;
    });

    console.log(tiers[5].cellArray[1]);
  };

  return (
    <Container className="myContainer">
      <Header />
      {tiers.map((tier) => {
        return (
          <Tier
            key={tier.id}
            id={tier.id}
            cellArray={tier.cellArray}
            onTierUpdate={tierUpdateHandler}
          />
        );
      })}
    </Container>
  );
};

export default TierList;
