import "../pages/HomePage.css";
import { Col } from "reactstrap";
import DragImage from "./DragImage";
import { ItemTypes } from "./IMAGEITEM";
import { useDrop } from "react-dnd";

// ToDo:  add ternary to check if there is an image.  If so, add DragImage component as child of the div.

const TierCell = ({ id, cellLabel, imageId }) => {
  // const [{ isOver }, drop] = useDrop(() => ({
  //   accept: ItemTypes.IMAGEITEM,
  //   drop: (item, monitor) =>
  //     onImageDrop(item.idOfImage, item.originalParent, cellId),
  //   // if you know the imageId you can find it's starting location from the current state.  It can be found in the object model.
  //   hover(item, monitor) {},
  //   collect: (monitor) => ({
  //     isOver: !!monitor.isOver(),
  //   }), // collect is returning isOver, since it is a single line arrow function return key word is not needed
  // }));

  return (
    <Col key={Math.random()}>
      <div className="myBoxP" id={id} key={id}>
        {cellLabel}
        <DragImage iId={imageId} currentParent={id} key={Math.random()} />
      </div>
    </Col>
  );
};

export default TierCell;
