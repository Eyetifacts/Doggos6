import "../pages/HomePage.css";
import { Container, Row, Col } from "reactstrap";
import TierCell from "./TierCell";
// import StartGrid from "../app/shared/StartGrid";

const TierRow = ({ rowArray }) => {
  console.log(Array.isArray(rowArray));

  return (
    <Container className="myContainer2">
      <Row className="myRow">
        {rowArray.map((cell) => {
          return (
            <Col>
              <TierCell key={cell.id} id={cell.id} cellLabel={cell.cellLabel} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default TierRow;
