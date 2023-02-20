import "../pages/HomePage.css";
import { Container, Col, Row } from "reactstrap";
import TierRow from "./TierRow";

const Tier = () => {
  return (
    <Container>
      <Row className="myRow">
        <Col>
          <div className="myLabelBox2">Label</div>
        </Col>
        <Col>
          <TierRow />
        </Col>
      </Row>
    </Container>
  );
};

export default Tier;
