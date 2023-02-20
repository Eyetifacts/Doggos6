import "../pages/HomePage.css";
import { Container } from "reactstrap";
import Tier from "./Tier";

const TierList = () => {
  return (
    <Container className="myContainer">
      <Tier />
    </Container>
  );
};

export default TierList;
