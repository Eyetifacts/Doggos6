import "../pages/HomePage.css";
import { Container, Row } from "reactstrap";
import TierCell from "./TierCell";

const TierRow = ({ rowArray, idOfRow, onRowUpdate }) => {
  //
  // pass the image, drag and drop cells up to the state.  Functions to make changes to the state should be there.
  // if no return, this matches the React DnD docs.  The function called on drop (TierCell) should return undefined or an object.
  //
  //
  const imageDropHandler = (imageId, dragCell, dropCell) => {
    onRowUpdate(imageId, dragCell, dropCell);
  };

  return (
    <Container className="myContainer2" key={idOfRow}>
      <Row className="myRow" key={idOfRow} id={idOfRow}>
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
