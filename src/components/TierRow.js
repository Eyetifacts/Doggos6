import "../pages/HomePage.css";
import { Container, Row } from "reactstrap";
import TierCell from "./TierCell";

const TierRow = ({ rowArray, rowId }) => {
  const imageDropHandler = (imageId, dragCell, dropCell) => {
    // pass the image, drag and drop cells up to the state.  Functions to make changes to the state should be there.
    // onDropUpdate(imageId, dragCell, dropCell);
    // if no return, this matches the React DnD docs.  The function called on drop (TierCell) should return undefined or an object.
  };

  return (
    <Container className="myContainer2" key={rowId}>
      <Row className="myRow" key={rowId} id={rowId}>
        {rowArray.map((cell) => {
          return (
            <TierCell
              key={cell.id}
              id={cell.id}
              cellLabel={cell.cellLabel}
              imageId={cell.image.imageId}
              onImageDrop={imageDropHandler}
            />
          );
        })}
      </Row>
    </Container>
  );
};

export default TierRow;
