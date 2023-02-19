import "../pages/HomePage.css";
import TierCell from "./TierCell";
import { Row, Col } from "reactstrap";

const TierRow = ({ cellList, onDropUpdate }) => {
  // Use .slice functions below on a copy of cellList
  // Don't mutate the original
  const imageDropHandler = (imageId, dragCell, dropCell) => {
    onDropUpdate(imageId, dragCell, dropCell);
  };

  const createTierCell = (cell) => {
    return (
      <TierCell
        key={cell.id}
        cellClass={cell.cellStyle}
        cellId={cell.id}
        celltext={cell.cellText}
        imageId={cell.image.imageId}
        onImageDrop={imageDropHandler}
      />
    );
  };

  const imageCells = (listOfCells) => {
    const tierImageCol = [...listOfCells];

    const theImageCells = tierImageCol.map((cell) => {
      return createTierCell(cell);
    });

    return theImageCells;
  };

  const labelCellList = cellList.slice(0, 1);
  const imageCellList = cellList.slice(1);
  return (
    <Row key={Math.random()} className="row-item">
      <Col className="tier-item2">{imageCells(labelCellList)}</Col>
      <Col className="tier-item">{imageCells(imageCellList)}</Col>
    </Row>
  );
};

export default TierRow;
