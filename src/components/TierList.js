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
    const testRow = [
      {
        id: "labelTierCelll0",
        cellLabel: "Label10",
        cellStyle: "myLabelBox",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-100",
        celllabel: "target-100",
        cellLocation: "item-image-cell100",
        cellStyle: "myBoxP",
        image: {
          type: "IMAGE",
          draggable: true,
          imageId: "Picture__01.png",
          imageString: dogImages.pic01,
          imageUrl: "img/FrenchBulldog1.png",
          dropImgParent: "target-100",
        },
      },
      {
        id: "target-101",
        cellText: "",
        cellLocation: "item-image-cell1",
        cellStyle: "myBoxP",
        image: {
          type: "IMAGE",
          draggable: true,
          imageId: "Picture__02.png",
          imageString: dogImages.pic02,
          imageUrl: "img/FrenchBulldog1.png",
          currentImgDivId: "target-101",
          dropImgLoc: "",
          dropImgParent: "parentContainer10",
        },
      },
      {
        id: "target-102",
        cellText: "",
        cellLocation: "item-image-cell2",
        cellStyle: "myBoxP",
        image: {
          type: "IMAGE",
          draggable: true,
          imageId: "Picture__03.png",
          imageString: dogImages.pic03,
          imageUrl: "img/FrenchBulldog1.png",
          currentImgDivId: "target-102",
          dropImgLoc: "",
          dropImgParent: "parentContainer10",
        },
      },
      {
        id: "target-103",
        cellText: "",
        cellLocation: "item-image-cell3",
        cellStyle: "myBoxP",
        image: {
          type: "IMAGE",
          draggable: true,
          imageId: "Picture__04.png",
          imageString: dogImages.pic04,
          imageUrl: "img/FrenchBulldog1.png",
          currentImgDivId: "target-103",
          dropImgLoc: "",
          dropImgParent: "parentContainer10",
        },
      },
      {
        id: "target-104",
        cellText: "",
        cellLocation: "item-image-cell4",
        cellStyle: "myBoxP",
        image: {
          type: "IMAGE",
          draggable: true,
          imageId: "Picture__05.png",
          imageString: dogImages.pic05,
          imageUrl: "img/FrenchBulldog1.png",
          currentImgDivId: "target-104",
          dropImgLoc: "",
          dropImgParent: "parentContainer10",
        },
      },
      {
        id: "target-105",
        cellText: "",
        cellLocation: "item-image-cell5",
        cellStyle: "myBoxP",
        image: {
          type: "IMAGE",
          draggable: true,
          imageId: "Picture__06.png",
          imageString: dogImages.pic06,
          imageUrl: "img/FrenchBulldog1.png",
          currentImgDivId: "target-105",
          dropImgLoc: "",
          dropImgParent: "parentContainer10",
        },
      },
      {
        id: "target-106",
        cellText: "",
        cellLocation: "item-image-cell6",
        cellStyle: "myBoxP",
        image: {
          type: "IMAGE",
          draggable: true,
          imageId: "Picture__07.png",
          imageString: dogImages.pic07,
          imageUrl: "img/FrenchBulldog1.png",
          currentImgDivId: "target-106",
          dropImgLoc: "",
          dropImgParent: "parentContainer10",
        },
      },
      {
        id: "target-107",
        cellText: "",
        cellLocation: "item-image-cell7",
        cellStyle: "myBoxP",
        image: {
          type: "IMAGE",
          draggable: true,
          imageId: "Picture__08.png",
          imageString: dogImages.pic08,
          imageUrl: "img/FrenchBulldog1.png",
          currentImgDivId: "target-107",
          dropImgLoc: "",
          dropImgParent: "parentContainer10",
        },
      },
      {
        id: "target-108",
        cellText: "",
        cellLocation: "item-image-cell8",
        cellStyle: "myBoxP",
        image: {
          type: "IMAGE",
          draggable: true,
          imageId: "Picture__09.png",
          imageString: dogImages.pic09,
          imageUrl: "img/FrenchBulldog1.png",
          currentImgDivId: "target-108",
          dropImgLoc: "",
          dropImgParent: "parentContainer10",
        },
      },
      {
        id: "target-109",
        cellText: "",
        cellLocation: "item-image-cell9",
        cellStyle: "myBoxP",
        image: {
          type: "IMAGE",
          draggable: true,
          imageId: "Picture__10.png",
          imageString: dogImages.pic10,
          imageUrl: "img/FrenchBulldog1.png",
          currentImgDivId: "target-109",
          dropImgLoc: "",
          dropImgParent: "parentContainer10",
        },
      },
      {
        id: "target-110",
        cellText: "",
        cellLocation: "item-image-cell0",
        cellStyle: "myBoxP",
        image: {
          type: "IMAGE",
          draggable: true,
          imageId: "Picture__11.png",
          imageString: dogImages.pic11,
          imageUrl: "img/Beagle1.png",
          currentImgDivId: "target-110",
          dropImgLoc: "",
          dropImgParent: "parentContainer11",
        },
      },
      {
        id: "target-111",
        cellText: "",
        cellLocation: "item-image-cell1",
        cellStyle: "myBoxP",
        image: {
          type: "IMAGE",
          draggable: true,
          imageId: "Picture__12.png",
          imageString: dogImages.pic12,
          imageUrl: "img/Beagle1.png",
          currentImgDivId: "target-111",
          dropImgLoc: "",
          dropImgParent: "parentContainer11",
        },
      },
      {
        id: "target-112",
        cellText: "",
        cellLocation: "item-image-cell2",
        cellStyle: "myBoxP",
        image: {
          type: "IMAGE",
          draggable: true,
          imageId: "Picture__13.png",
          imageString: dogImages.pic13,
          imageUrl: "img/Beagle1.png",
          currentImgDivId: "target-112",
          dropImgLoc: "",
          dropImgParent: "parentContainer11",
        },
      },
      {
        id: "target-113",
        cellText: "",
        cellLocation: "item-image-cell3",
        cellStyle: "myBoxP",
        image: {
          type: "IMAGE",
          draggable: true,
          imageId: "Picture__14.png",
          imageString: dogImages.pic14,
          imageUrl: "img/Beagle1.png",
          currentImgDivId: "target-113",
          dropImgLoc: "",
          dropImgParent: "parentContainer11",
        },
      },
      {
        id: "target-114",
        cellText: "",
        cellLocation: "item-image-cell4",
        cellStyle: "myBoxP",
        image: {
          type: "IMAGE",
          draggable: true,
          imageId: "Picture__15.png",
          imageString: dogImages.pic15,
          imageUrl: "img/Beagle1.png",
          currentImgDivId: "target-114",
          dropImgLoc: "",
          dropImgParent: "parentContainer11",
        },
      },
      {
        id: "target-115",
        cellText: "",
        cellLocation: "item-image-cell5",
        cellStyle: "myBoxP",
        image: {
          type: "IMAGE",
          draggable: true,
          imageId: "Picture__16.png",
          imageString: dogImages.pic16,
          imageUrl: "img/Beagle1.png",
          currentImgDivId: "target-115",
          dropImgLoc: "",
          dropImgParent: "parentContainer11",
        },
      },
      {
        id: "target-116",
        cellText: "",
        cellLocation: "item-image-cell6",
        cellStyle: "myBoxP",
        image: {
          type: "IMAGE",
          draggable: true,
          imageId: "Picture__17.png",
          imageString: dogImages.pic17,
          imageUrl: "img/Beagle1.png",
          currentImgDivId: "target-116",
          dropImgLoc: "",
          dropImgParent: "parentContainer11",
        },
      },
      {
        id: "target-117",
        cellText: "",
        cellLocation: "item-image-cell7",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-118",
        cellText: "",
        cellLocation: "item-image-cell8",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-119",
        cellText: "",
        cellLocation: "item-image-cell9",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
    ];
    const testDragOrDrop = "drop";
    const testFoundItem = {
      foundRowIndex: 5,
      foundCellIndex: 3,
      foundRowImageCount: 17,
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
      let shiftRow = row;
      const index = foundItem.foundCellIndex;
      const imgCount = foundItem.foundRowImageCount;
      // Drag Shift
      if (dragOrDrop === "drag") {
        for (let i = index; i < imgCount - 1; i++) {
          shiftRow[i].image = shiftRow[i + 1].image;
        }
        shiftRow[imgCount].image = emptyImage;
      } else {
        // Drop Shift
        if (index > imgCount) {
          shiftRow[imgCount + 1].image = dragImageObject;
        } else {
          for (let i = imgCount; i > index; i--) {
            shiftRow[i].image = shiftRow[i - 1].image;
          }
          shiftRow[index].image = dragImageObject;
        }
      }
      return shiftRow;
    };
    console.log(
      shiftImages(testDragOrDrop, testRow, testFoundItem, testDragImageObject)
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
