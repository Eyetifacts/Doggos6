import "../pages/HomePage.css";

const TierCell = ({ cellLabel }) => {
  console.log(cellLabel);
  return <div className="myBoxP">{cellLabel}</div>;
};

export default TierCell;
