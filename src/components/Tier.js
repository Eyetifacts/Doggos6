import React from "react";
import "../pages/HomePage.css";
import TierRow from "./TierRow";
import TierCell from "./TierCell";
import { Col } from "reactstrap";

const Tier = ({ tierLabel, tierCells }) => {
  //   const createRowOfTierCells = () => {
  //     for (let i = 0; i < 10; i++) {
  //       <TierCell></TierCell>;
  //     }
  //   };

  return (
    <>
      <Col>
        <TierCell
          className="myLabelBox"
          id="ABC123"
          celltext="Label"
          ref="drop"
        />
      </Col>
      <Col>
        <TierRow cellList={tierCells} />
      </Col>
    </>
  );
};

export default Tier;
