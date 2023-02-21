import "../pages/HomePage.css";
import { Container, Row, Col } from "reactstrap";
import TierCell from "./TierCell";
import StartGrid from "../app/shared/StartGrid";

const TierRow = () => {
  const makeCellRow = () => {
    const currentRow = [...StartGrid[0].cellArray];
    const tierArray = [];
    for (let i = 1; i < 10; i++) {
      tierArray.push(<TierCell />);
      // console.log(currentRow[i]);
    }
    console.log(tierArray);
    return tierArray;
  };
  makeCellRow();

  return (
    <Container className="myContainer2">
      <Row className="myRow">
        <Col>
          <TierCell />
        </Col>
      </Row>
    </Container>
  );
};

export default TierRow;
