import "../pages/HomePage.css";
import TierRow from "./TierRow";
import { Container } from "reactstrap";
import { useState } from "react";
import INITIALGRID1 from "../app/shared/INITIALGRID1";

const emptyCell = {
  id: "",
  cellText: "",
  cellLocation: "",
  cellStyle: "",
  image: {
    type: "",
    draggable: false,
    imageId: "",
    imageUrl: "",
    currentImgDivId: "",
    dropImgLoc: "",
    dropImgParent: "",
  },
};

const findDragCellRowIndex = (tiers, dragCellId) => {
  let foundIndex;
  let foundRow;
  for (let i = 0; i < tiers.grid.length; i++) {
    let cellDragChildren = tiers.grid[i].cellArray;
    let dragCellRowIndex = cellDragChildren.findIndex(
      (cell) => cell.id === dragCellId
    );
    if (dragCellRowIndex > 0) {
      foundRow = i;
      foundIndex = dragCellRowIndex;
    }
  }
  return foundRow;
};

const getCurrentDragRowImageArray = (tiers, dragCellRowIndex) => {
  const dragRow = tiers.grid[dragCellRowIndex].cellArray;
  let currentDragImgArr = dragRow.map((cell) => cell.image);
  return currentDragImgArr;
};

const getDragImageObject = (tiers, dragCellId, dragCellRowIndex) => {
  const dragCellRow = tiers.grid[dragCellRowIndex];
  let dragCellIndex = dragCellRow.cellArray.findIndex(
    (cell) => cell.id === dragCellId
  ); // dragCell
  let dragImageObject = dragCellRow.cellArray[dragCellIndex].image;

  return dragImageObject;
};

const updateDragRowImageArray = (
  tiers,
  imgId,
  currentDragImgArr,
  dragCellRowIndex
) => {
  const dragRow = tiers[dragCellRowIndex];
  let newDragImgArr = currentDragImgArr.filter(
    (image) => image.imageId !== imgId
  );

  return newDragImgArr;
};

const createNewDragRow = (tiers, dragCellRowIndex, newDragImgArr) => {
  const newDragRow = tiers.grid[dragCellRowIndex];
  for (let i = 0; i < newDragRow.cellArray.length; i++) {
    newDragRow.cellArray[i].image = emptyCell.image;
  }
  for (let a = 0; a < newDragImgArr.length; a++) {
    newDragRow.cellArray[a].image = newDragImgArr[a];
  }
  return newDragRow;
};
//
// Drop Functions
//
const findDropRowIndex = (tiers, dropCellId) => {
  let foundIndex;
  for (let i = 0; i < tiers.grid.length; i++) {
    let cellDropChildren = tiers.grid[i].cellArray;
    let dropCellRowIndex = cellDropChildren.findIndex(
      (cell) => cell.id === dropCellId
    );

    if (dropCellRowIndex > 0) {
      foundIndex = i;
      return foundIndex;
    }
  }
};

// need to update this to shift it to the left if no images exist
// if dropCellIndex > ImageArray, max index place at Max index + 1
// if dropCellIndex <= ImageArray max index then splice at dropCellIndex
const updateCurrentDropRowImageArray = (
  tiers,
  dragImageObject,
  dropCellRowIndex,
  dropCellId
) => {
  const dropRow = tiers.grid[dropCellRowIndex];
  let findFirstEmptyIndex;
  findFirstEmptyIndex = dropRow.cellArray.findIndex(
    (cell, index) => cell.image.imageId === "" && index !== 0
  );

  let newDropImgArr = dropRow.cellArray.map((cell) => cell.image);
  let dropCellIndex = dropRow.cellArray.findIndex(
    (cell) => cell.id === dropCellId
  );

  if (dropCellIndex > findFirstEmptyIndex) {
    newDropImgArr.splice(findFirstEmptyIndex, 0, dragImageObject);
    // Remove the 11th image object
    newDropImgArr.splice(-1, 1);
  } else {
    newDropImgArr.splice(dropCellIndex, 0, dragImageObject);
    // Remove the 11th image object
    newDropImgArr.splice(-1, 1);
  }

  return newDropImgArr;
};

const createNewDropRowImages = (tiers, dropCellRowIndex, newDropImgArr) => {
  let dropRow = tiers.grid[dropCellRowIndex];
  const newDropRowImages = dropRow.cellArray.map((cell) => {
    cell.image = emptyCell.image;
  });
  for (let i = 0; i < dropRow.cellArray.length; i++) {
    newDropRowImages[i] = newDropImgArr[i];
  }

  return newDropRowImages;
};

const createNewDropRow = (tiers, dropCellRowIndex, newDropRowImages) => {
  let dropRow = tiers.grid[dropCellRowIndex];
  for (let i = 0; i < dropRow.cellArray.length; i++) {
    dropRow.cellArray[i].image = newDropRowImages[i];
  }
  let newDropRow = dropRow;
  return newDropRow;
};

const gridUpdate = (
  newDropRow,
  newDragRow,
  dropCellRowIndex,
  dragCellRowIndex,
  updatedGrid
) => {
  let updateGrid = updatedGrid.grid;

  updateGrid.grid[dragCellRowIndex] = newDragRow;
  updateGrid.grid[dropCellRowIndex] = newDropRow;

  return updateGrid;
};
// ******************************************************
// ******************************************************
// ******************************************************
// ******************************************************
// const newGrid = (tiers) => {};

const TierList = () => {
  const startGrid = {
    grid: JSON.parse(JSON.stringify(INITIALGRID1)),
  };

  const [tiers, setTiers] = useState(startGrid);

  // Collect the key drag and drop data from the child components
  const dragDropDetailsHandler = (imgId, dragCellId, dropCellId) => {
    const dragDropDetailsObj = {
      imgId: imgId,
      dragCellId: dragCellId,
      dropCellId: dropCellId,
    };
    updateGrid(
      tiers,
      dragDropDetailsObj.imgId,
      dragDropDetailsObj.dragCellId,
      dragDropDetailsObj.dropCellId
    );
  };

  const updateGrid = (tiers, imgId, dragCellId, dropCellId) => {
    let updatedGrid = {
      grid: JSON.parse(JSON.stringify(tiers)),
    };

    // Drag Functions
    //
    const dragCellRowIndex = findDragCellRowIndex(updatedGrid.grid, dragCellId);

    const currentDragImgArr = getCurrentDragRowImageArray(
      updatedGrid.grid,
      dragCellRowIndex
    );
    const dragImageObject = getDragImageObject(
      updatedGrid.grid,
      dragCellId,
      dragCellRowIndex
    );
    const newDragImgArr = updateDragRowImageArray(
      updatedGrid.grid,
      imgId,
      currentDragImgArr,
      dragCellRowIndex
    );
    const newDragRow = createNewDragRow(
      updatedGrid.grid,
      dragCellRowIndex,
      newDragImgArr
    );
    // Drop Row Update
    //
    const dropCellRowIndex = findDropRowIndex(updatedGrid.grid, dropCellId);
    const newDropImgArr = updateCurrentDropRowImageArray(
      updatedGrid.grid,
      dragImageObject,
      dropCellRowIndex,
      dropCellId
    );
    const newDropRowImages = createNewDropRowImages(
      tiers,
      dropCellRowIndex,
      newDropImgArr
    );

    const newDropRow = createNewDropRow(
      tiers,
      dropCellRowIndex,
      newDropRowImages
    );

    const dragDropUpdatedGrid = gridUpdate(
      newDropRow,
      newDragRow,
      dropCellRowIndex,
      dragCellRowIndex,
      updatedGrid
    );

    const dragDropGrid = JSON.parse(JSON.stringify(dragDropUpdatedGrid));

    setTiers(dragDropGrid);
  };

  return (
    <Container className="myContainer">
      {tiers.grid.map((tier) => {
        return (
          <TierRow
            key={tier.id}
            cellList={tier.cellArray}
            onDropUpdate={dragDropDetailsHandler}
          />
        );
      })}
      <div>x</div>
      <div>x</div>
      <div>x</div>
      <button
        id="testbutton"
        className="myBox"
        onClick={() => {
          console.log("hello");
        }}
      />
    </Container>
  );
};

export default TierList;
