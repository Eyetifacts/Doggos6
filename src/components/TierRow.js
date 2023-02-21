import "../pages/HomePage.css";
import { Container, Row, Col } from "reactstrap";
import TierCell from "./TierCell";
// import StartGrid from "../app/shared/StartGrid";

const TierRow = ({ rowArray, rowId }) => {
  console.log(Array.isArray(rowArray));

  return (
    <Container className="myContainer2" key={rowId}>
      <Row className="myRow" key={rowId} id={rowId}>
        {rowArray.map((cell) => {
          return (
            <Col key={Math.random()}>
              <TierCell key={cell.id} id={cell.id} cellLabel={cell.cellLabel} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default TierRow;
