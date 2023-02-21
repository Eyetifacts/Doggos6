import "../pages/HomePage.css";
import { Container, Col, Row } from "reactstrap";
import TierRow from "./TierRow";

const Tier = ({ id, cellArray }) => {
  const labelDetails = cellArray[0];
  const createRowArray = (origArray) => {
    let newRowArray = [];
    for (let i = 1; i < 11; i++) {
      newRowArray.push(origArray[i]);
    }
    return newRowArray;
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
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Tier;
