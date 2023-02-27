import "../pages/HomePage.css";
import { Container, Col, Row } from "reactstrap";
import TierRow from "./TierRow";

const Tier = ({ id, cellArray, onTierUpdate }) => {
  const labelDetails = cellArray[0];
  const createRowArray = (origArray) => {
    let newRowArray = [];
    for (let i = 1; i < cellArray.length; i++) {
      newRowArray.push(origArray[i]);
    }
    return newRowArray;
  };

  const rowUpdateHandler = (imageId, dragCell, dropCell) => {
    onTierUpdate(imageId, dragCell, dropCell);
  };

  return (
    <Container>
      <Row className="row-item">
        <Col className="tier-item2">
          <div className={labelDetails.cellStyle} key={labelDetails.id}>
            {id}
          </div>
        </Col>
        <Col className="tier-item">
          <TierRow
            key={Math.random()}
            idOfRow={id}
            rowArray={createRowArray(cellArray)}
            onRowUpdate={rowUpdateHandler}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Tier;
