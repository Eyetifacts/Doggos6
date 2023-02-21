import "../pages/HomePage.css";
import { Container, Row, Col } from "reactstrap";
import TierCell from "./TierCell";

const TierRow = ({ rowArray, rowId }) => {
  return (
    <Container className="myContainer2" key={rowId}>
      <Row className="myRow" key={rowId} id={rowId}>
        {rowArray.map((cell) => {
          return (
            <TierCell key={cell.id} id={cell.id} cellLabel={cell.cellLabel} />
          );
        })}
      </Row>
    </Container>
  );
};

export default TierRow;
