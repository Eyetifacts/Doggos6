import "../pages/HomePage.css";
import { Container } from "reactstrap";
import Tier from "./Tier";
import StartGrid from "../app/shared/StartGrid";

const TierList = () => {
  return (
    <Container className="myContainer">
      {StartGrid.map((tier) => {
        return <Tier id={tier.id} cellArray={tier.cellArray} />;
      })}
    </Container>
  );
};

export default TierList;
