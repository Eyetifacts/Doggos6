import "../pages/HomePage.css";
import { Container, Row, Col } from "reactstrap";
import TierCell from "./TierCell";
import StartGrid from "../app/shared/StartGrid";

const TierRow = () => {
  // const makeCellRow = () => {
  //   const currentRow = [...StartGrid[0].cellArray];
  //   const tierArray = [];
  //   for (let i = 1; i < 10; i++) {
  //     tierArray.push(<TierCell />);
  //     // console.log(currentRow[i]);
  //   }
  console.log(StartGrid[0].cellArray[0].id);
  //   return tierArray;
  // };
  // makeCellRow();

  return (
    <Container className="myContainer2">
      <Row className="myRow">
        <Col>
          <TierCell cellLabel={StartGrid[0].cellArray[1].cellLabel} />
        </Col>
        <Col>
          <TierCell cellLabel={StartGrid[0].cellArray[2].cellLabel} />
        </Col>
        <Col>
          <TierCell cellLabel={StartGrid[0].cellArray[3].cellLabel} />
        </Col>
        <Col>
          <TierCell cellLabel={StartGrid[0].cellArray[4].cellLabel} />
        </Col>
        <Col>
          <TierCell cellLabel={StartGrid[0].cellArray[5].cellLabel} />
        </Col>
        <Col>
          <TierCell cellLabel={StartGrid[0].cellArray[6].cellLabel} />
        </Col>
        <Col>
          <TierCell cellLabel={StartGrid[0].cellArray[7].cellLabel} />
        </Col>
        <Col>
          <TierCell cellLabel={StartGrid[0].cellArray[8].cellLabel} />
        </Col>
        <Col>
          <TierCell cellLabel={StartGrid[0].cellArray[9].cellLabel} />
        </Col>
        <Col>
          <TierCell cellLabel={StartGrid[0].cellArray[10].cellLabel} />
        </Col>
      </Row>
    </Container>
  );
};

export default TierRow;
