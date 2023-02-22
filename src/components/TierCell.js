import "../pages/HomePage.css";
import { Col } from "reactstrap";
import DragImage from "./DragImage";

// ToDo:  add ternary to check if there is an image.  If so, add DragImage component as child of the div.

const TierCell = ({ id, cellLabel, imageId }) => {
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
