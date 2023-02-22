import "../pages/HomePage.css";
import { Container } from "reactstrap";
import Tier from "./Tier";
import StartGrid from "../app/shared/StartGrid";
import { useState } from "react";

const TierList = () => {
  const [tiers, setTiers] = useState(StartGrid);
  return (
    <Container className="myContainer">
      {tiers.map((tier) => {
        return <Tier key={tier.id} id={tier.id} cellArray={tier.cellArray} />;
      })}
    </Container>
  );
};

export default TierList;
