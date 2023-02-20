import "../pages/HomePage.css";
import { Container, Col, Row } from "reactstrap";
import TierRow from "./TierRow";

const Tier = () => {
  return (
    <Container>
      <Row className="row-item">
        <Col className="tier-item2">
          <div className="myLabelBox">Label</div>
        </Col>
        <Col className="tier-item">
          <TierRow />
        </Col>
      </Row>
    </Container>
  );
};

export default Tier;
