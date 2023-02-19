import "../pages/HomePage.css";
import DragImage from "./DragImage";
import { ItemTypes } from "./IMAGEITEM";
import { useDrop } from "react-dnd";

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

const TierCell = ({ cellId, celltext, imageId }) => {
  return (
    <div className="myLabelBox">
      {celltext}
      {!imageId ? null : (
        <DragImage iId={imageId} currentParent={cellId} key={Math.random()} />
      )}
    </div>
  );
};

export default TierCell;
