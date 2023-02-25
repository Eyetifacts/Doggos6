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
    console.log(imageId);
    // console.log(dragCell);
    console.log(dropCell);
    const emptyImage = {
      type: "",
      draggable: false,
      imageId: "",
      imageString: null,
      imageUrl: "",
      dropImgParent: "",
    };

    const testImage = {
      type: "IMAGE",
      draggable: true,
      imageId: "Picture__20.png",
      imageString: "pic20",
      imageUrl: "img/Beagle1.png",
      currentImgDivId: "target-119",
      dropImgLoc: "",
      dropImgParent: "parentContainer11",
    };

    // Drop Cell Row
    //
    const findDropRowIndex = (tiers, dropCell) => {
      let foundItem = {
        foundRowIndex: -1,
        foundCellndex: 0,
      };
      for (let i = 0; i < tiers.length; i++) {
        let cellDropChildren = tiers[i].cellArray;
        let dropCellRowIndex = cellDropChildren.findIndex(
          (cell) => cell.id === dropCell
        );

        if (dropCellRowIndex > 0) {
          foundItem.foundRowIndex = i;
          foundItem.foundCellIndex = dropCellRowIndex;
          return foundItem;
        }
      }
    };

    const countCurrentRowImages = (row) => {
      let imageCount = 0;
      for (let i = 0; i < 10; i++) {
        if (row.cellArray[i].image.imageId !== "") imageCount = imageCount + 1;
      }
      return imageCount;
    };

    const shiftRowAndDropImage = (tiers, dropCell) => {
      const dropIndex = findDropRowIndex(tiers, dropCell);
      const imageCount = countCurrentRowImages(
        tiers[dropIndex.foundRowIndex].cellArray
      );
      for (let i = imageCount; i > dropIndex.foundCellndex; i--) {
        tiers[dropIndex.foundRowIndex].cellArray[i + 1] =
          tiers[dropIndex.foundRowIndex].cellArray[i];
      }
    };

    // Drag Cell Row
    //
    // const findDragCellRowIndex = (tiers, dragCell) => {
    //   let foundItem;
    //   for (let i = 0; i < tiers.length; i++) {
    //     let cellDragChildren = tiers[i].cellArray;
    //     let dragCellRowIndex = cellDragChildren.findIndex(
    //       (cell) => cell.id === dragCell
    //     );
    //     if (dragCellRowIndex > 0) {
    //       foundItem = {
    //         foundRow: i,
    //         cellIndex: dragCellRowIndex,
    //       };

    //       return;
    //     }
    //   }
    //   let imageCount = 0;
    //   for (let i = 0; i < 10; i++) {
    //     if (tiers[foundItem.foundRow].cellArray[i].imageId === "") {
    //       imageCount = imageCount + 1;
    //     }
    //   }
    //   for (let j = imageCount; j >= foundItem.cellIndex; j--) {
    //     tiers[foundItem.foundRow].cellArray[j + 1].image =
    //       tiers[foundItem.foundRow].cellArray[j].image;
    //   }
    // };

    setTiers((prevState) => {
      let newGrid = JSON.parse(JSON.stringify(prevState));
      // newGrid[0].cellArray[1].image = testImage;
      // newGrid[5].cellArray[1].image = emptyImage;

      // drop cellIndex = 1
      // shift last item left 3 => 4
      // shift 2 => 3
      // shift 1 => 2
      // drop dragImage => 1
      // empty original dragImage
      // Number of pre-drop Images = 3
      // Drop location = 1
      // => Shift Let pre-drop images from 1 to 3 in reverse order
      // Drop drag image to Location 1
      // Empty pre-drag image cell location

      // for lastCellImage down to currentDropCellImage
      // Shift image imageLoc+1 = imageLoc

      newGrid[0].cellArray[4].image = newGrid[0].cellArray[3].image;
      newGrid[0].cellArray[3].image = newGrid[0].cellArray[2].image;
      newGrid[0].cellArray[2].image = newGrid[0].cellArray[1].image;
      newGrid[0].cellArray[1].image = newGrid[5].cellArray[1].image;
      newGrid[5].cellArray[1].image = emptyImage;

      return newGrid;
    });

    // console.log(tiers[0].cellArray[1]);
    // console.log(tiers[5].cellArray[1]);
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
