import "../pages/HomePage.css";
import { Container } from "reactstrap";
import Tier from "./Tier";
import StartGrid from "../app/shared/StartGrid";
import { useState } from "react";
import Header from "./Header";
import { dogImages } from "../constants";
import testDropRow from "../app/shared/dropTest";
import testDragRow from "../app/shared/dragTest";
import emptyRow from "../app/shared/emptyRow";
import testDragRow31 from "../app/shared/dragTest31";
import testDropRow20 from "../app/shared/dropTest20]";

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
    //
    const countTierImages = (rowArray) => {
      let startImageCount = 0;
      for (let i = 1; i < 11; i++) {
        if (rowArray[i].image.imageId !== "") {
          startImageCount = startImageCount + 1;
        }
      }
      return startImageCount;
    };
    //
    //
    const getRowCellIndexImgCount = (tiers, cellId) => {
      let foundItem = {
        foundRowIndex: -1,
        foundCellIndex: 0,
        foundRowImageCount: 0,
      };
      for (let i = 0; i < tiers.length; i++) {
        let row = tiers[i].cellArray;
        let cellIndex = row.findIndex((cell) => cell.id === cellId);

        if (cellIndex > 0) {
          foundItem.foundRowIndex = i;
          foundItem.foundCellIndex = cellIndex;
          foundItem.foundRowImageCount = countTierImages(
            tiers[foundItem.foundRowIndex]
          );
          return foundItem;
        }
      }
    };
    //
    //
    const testDragOrDrop = "drop";
    const testFoundItem = {
      foundRowIndex: 5,
      foundCellIndex: 3,
      foundRowImageCount: 20,
    };

    const testDragImageObject = {
      type: "IMAGE",
      draggable: true,
      imageId: "Picture__20.png",
      imageString: dogImages.pic20,
      imageUrl: "img/Beagle1.png",
      currentImgDivId: "target-119",
      dropImgLoc: "",
      dropImgParent: "parentContainer11",
    };

    const shiftImages = (dragOrDrop, row, foundItem, dragImageObject) => {
      let inputRow = JSON.parse(JSON.stringify(row));
      const startInputCellCount = inputRow.length;
      let shiftRow = {};
      const index = foundItem.foundCellIndex;
      const imgCount = foundItem.foundRowImageCount;
      // Drag Shift
      if (dragOrDrop === "drag") {
        for (let i = index; i < imgCount; i++) {
          inputRow[i].image = inputRow[i + 1].image;
        }
        if (imgCount % 10 === 1) {
          inputRow.length = startInputCellCount - 10;
          shiftRow = inputRow;
        } else {
          shiftRow = inputRow;
        }
      } else {
        // Drop Shift
        let addRow = row.concat(emptyRow);
        if (imgCount % 10 === 0) {
          shiftRow = inputRow.concat(emptyRow);
          console.log(shiftRow);
        } else {
          shiftRow = inputRow;
        }
        if (index > imgCount) {
          shiftRow[imgCount + 1].image = dragImageObject;
        } else {
          for (let i = imgCount + 1; i > index; i--) {
            shiftRow[i].image = shiftRow[i - 1].image;
          }
          shiftRow[index].image = dragImageObject;
        }
      }
      return shiftRow;
    };
    //
    console.log(
      shiftImages(
        testDragOrDrop,
        testDropRow20,
        testFoundItem,
        testDragImageObject
      )
    );
    //
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
    const getDragImageObject = (imageId, tiers) => {
      let imageLocItem = {
        imageRowIndex: -1,
        imageCellIndex: 0,
      };
      let searchGrid = JSON.parse(JSON.stringify(tiers));
      let dragImage = {};
      for (let i = 0; i < searchGrid.length; i++) {
        let dragChildren = searchGrid[i].cellArray;
        let imageRowIndex = dragChildren.findIndex(
          (cell) => cell.image.imageId === imageId
        );

        if (imageRowIndex > 0) {
          imageLocItem.imageRowIndex = i;
          imageLocItem.imageCellIndex = imageRowIndex;
        }
      }
      dragImage =
        searchGrid[imageLocItem.imageRowIndex].cellArray[
          imageLocItem.imageCellIndex
        ].image;
      return dragImage;
    };
    //
    //
    const shiftDropImages = (dropRowCellArray, dropCellIndex, dragImage) => {
      const startCellImageCount = countTierImages(dropRowCellArray);
      if (dropCellIndex > startCellImageCount) {
        dropRowCellArray[startCellImageCount + 1].image = dragImage;
      } else {
        for (let i = 10; i > dropCellIndex; i--) {
          dropRowCellArray[i].image = dropRowCellArray[i - 1].image;
        }
        dropRowCellArray[dropCellIndex].image = dragImage;
      }

      return dropRowCellArray;
    };
    //
    //
    // Don't edit tiers, it ends up breaking dragImage
    // const shiftDragImages = (dragRowCellArray) => {
    //   for (let i = 4; i < 20; i++) {
    //     console.log(dragRowCellArray[i]);
    //     dragRowCellArray[i].image = dragRowCellArray[i + 1].image;
    //   }
    //   dragRowCellArray[20].image = emptyImage;
    //   return dragRowCellArray;
    // };
    // console.log(shiftDragImages(tiers[5].cellArray));

    //
    //
    const shiftRows = (dropCell) => {
      setTiers((prevState) => {
        const getRowDropCell = findDropRowIndex(prevState, dropCell);
        const dragImage = getDragImageObject(imageId, prevState);

        let newGrid = JSON.parse(JSON.stringify(prevState));
        let newDropRow = shiftDropImages(
          newGrid[getRowDropCell.foundRowIndex].cellArray,
          getRowDropCell.foundCellIndex,
          dragImage
        );

        newGrid[getRowDropCell.foundRowIndex].cellArray = newDropRow;

        return newGrid;
      });
    };
    //
    //
    shiftRows(dropCell);
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
    //
    //
    // Drag Cell Row
    //
    //
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
