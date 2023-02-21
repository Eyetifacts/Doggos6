import "../pages/HomePage.css";

const TierCell = ({ id, cellLabel, image }) => {
  return (
    <div className="myBoxP" id={id} key={id}>
      {cellLabel}
    </div>
  );
};

export default TierCell;
