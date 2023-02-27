import "../pages/HomePage.css";
import { Col } from "reactstrap";
import DragImage from "./DragImage";
import { ItemTypes } from "./IMAGEITEM";
import { useDrop } from "react-dnd";

// ToDo:  add ternary to check if there is an image.  If so, add DragImage component as child of the div.

const TierCell = ({ id, cellLabel, imageId, onImageDrop }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.IMAGEITEM,
    drop: (item, monitor) =>
      onImageDrop(item.idOfImage, item.originalParent, id),
    // item: {
    //   idOfImage: iId,
    //   originalParent: currentParent,
    // },
    // drop returns the drop result, which should be the item (img, dragCell, dropCell)
    // the item in the function above is simply passing the drag item to the function
    // if you know the imageId you can find it's starting location from the current state.  It can be found in the object model.
    hover(item, monitor) {},
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }), // collect is returning isOver, since it is a single line arrow function return key word is not needed
  }));

  return (
    <Col key={Math.random()}>
      <div className="myBoxP" id={id} key={id} ref={drop}>
        {cellLabel}
        <DragImage iId={imageId} currentParent={id} key={Math.random()} />
      </div>
    </Col>
  );
};

export default TierCell;
