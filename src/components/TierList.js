import "../pages/HomePage.css";
import { Container } from "reactstrap";
import Tier from "./Tier";
import StartGrid from "../app/shared/StartGrid";
import { useState } from "react";
import Header from "./Header";
import { dogImages } from "../constants";

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
    // console.log(imageId);
    // console.log(dragCell);
    // console.log(dropCell);
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

    const testImage2 = {
      type: "IMAGE",
      draggable: true,
      imageId: "Picture__10.png",
      imageString: dogImages.pic10,
      imageUrl: "img/FrenchBulldog1.png",
      currentImgDivId: "target-109",
      dropImgLoc: "",
      dropImgParent: "parentContainer10",
    };

    // Drop Cell Row
    //
    const findDropRowIndex = (tiers, dropCell) => {
      //  Working, returns the rowIndex and the number (1 to 10) where dropped
      let foundDropItem = {
        foundRowIndex: -1,
        foundCellIndex: 0,
      };
      for (let i = 0; i < tiers.length; i++) {
        let cellDropChildren = tiers[i].cellArray;
        let dropCellRowIndex = cellDropChildren.findIndex(
          (cell) => cell.id === dropCell
        );

        if (dropCellRowIndex > 0) {
          foundDropItem.foundRowIndex = i;
          foundDropItem.foundCellIndex = dropCellRowIndex;
          return foundDropItem;
        }
      }
    };
    //
    //
    const shiftImages = (dropRowCellArray, dropCellIndex) => {
      console.log(dropCellIndex);
      console.log(countImages(dropRowCellArray));
      const startCellImageCount = countImages(dropRowCellArray);
      if (dropCellIndex > startCellImageCount) {
        console.log("PLACE AT END");
        dropRowCellArray[startCellImageCount + 1].image = testImage2;
      } else {
        for (let i = 10; i > dropCellIndex; i--) {
          dropRowCellArray[i].image = dropRowCellArray[i - 1].image;
        }
        dropRowCellArray[dropCellIndex].image = testImage2;
      }

      return dropRowCellArray;
    };
    //
    //
    const countImages = (dropCellRowArray) => {
      let startImageCount = 0;
      for (let i = 1; i < 11; i++) {
        if (dropCellRowArray[i].image.imageId !== "") {
          startImageCount = startImageCount + 1;
        }
      }
      return startImageCount;
    };
    //
    //
    const shiftDropRow = (dropCell) => {
      setTiers((prevState) => {
        const getRowDropCell = findDropRowIndex(prevState, dropCell);

        let newGrid = JSON.parse(JSON.stringify(prevState));
        let newRow = shiftImages(
          newGrid[getRowDropCell.foundRowIndex].cellArray,
          getRowDropCell.foundCellIndex
        );

        // newRow[getRowDropCell.foundCellIndex].image = testImage2;

        newGrid[getRowDropCell.foundRowIndex].cellArray = newRow;

        return newGrid;
      });
    };
    shiftDropRow(dropCell);

    //
    //
    const findDragRowIndex = (tiers, dragCell) => {
      let foundDragItem = {
        foundRowIndex: -1,
        foundCellndex: 0,
      };
      for (let i = 0; i < tiers.length; i++) {
        let cellDragChildren = tiers[i].cellArray;
        let dragCellRowIndex = cellDragChildren.findIndex(
          (cell) => cell.id === dragCell
        );

        if (dragCellRowIndex > 0) {
          foundDragItem.foundRowIndex = i;
          foundDragItem.foundCellIndex = dragCellRowIndex;
          return foundDragItem;
        }
      }
    };

    //
    //

    const countCurrentRowImages = (row) => {
      let imageCount = 0;
      for (let i = 0; i < 10; i++) {
        if (row.cellArray[i].image.imageId !== "") imageCount = imageCount + 1;
      }
      return imageCount;
    };

    const shiftRowAndDropImage = (tiers, dropCell, dragCell) => {
      const dropIndex = findDropRowIndex(tiers, dropCell);
      const imageCount = countCurrentRowImages(
        tiers[dropIndex.foundRowIndex].cellArray
      );
      for (let i = imageCount; i > dropIndex.foundCellndex; i--) {
        tiers[dropIndex.foundRowIndex].cellArray[i + 1] =
          tiers[dropIndex.foundRowIndex].cellArray[i];
      }
      tiers[dropIndex.foundRowIndex].cellArray[dropIndex.foundCellndex].image =
        testImage;
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
