import "../pages/HomePage.css";
import { Col } from "reactstrap";

// ToDo:  add ternary to check if there is an image.  If so, add DragImage component as child of the div.

const TierCell = ({ id, cellLabel, image }) => {
  return (
    <Col key={Math.random()}>
      <div className="myBoxP" id={id} key={id}>
        {cellLabel}
      </div>
    </Col>
  );
};

export default TierCell;
