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

const TierCell = ({ cellClass, cellId, celltext, imageId, onImageDrop }) => {
  // const ref = useRef(null); // may not need this line ref for drop is below
  // const [{ isOver }, drop] = useDrop(() => ({
  //   accept: ItemTypes.IMAGEITEM,
  //   drop: (item, monitor) =>
  //     onImageDrop(item.idOfImage, item.originalParent, cellId),
  //   // if you know the imageId you can find it's starting location from the current state.  It can be found in the object model.
  //   hover(item, monitor) {
  //     // hoverImageShift(cellId, item.iId);
  //   },
  //   collect: (monitor) => ({
  //     isOver: !!monitor.isOver(),
  //   }), // collect is returning isOver, since it is a single line arrow function return key word is not needed
  // }));

  return (
    <div className={cellClass} id={cellId} celltext={celltext} ref={drop}>
      {celltext}
      <DragImage iId={imageId} currentParent={cellId} key={Math.random()} />
    </div>
  );
};

export default TierCell;
