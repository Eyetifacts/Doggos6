import "../pages/HomePage.css";
import { Container, Col, Row } from "reactstrap";
import TierRow from "./TierRow";

const Tier = () => {
  return (
    <Container className="myContainer">
      <Row className="myRow">
        <Col>
          <div className="myBox">Label</div>
        </Col>
        <Col>
          <TierRow />
          <TierRow />
        </Col>
      </Row>
    </Container>
  );
};

export default Tier;
