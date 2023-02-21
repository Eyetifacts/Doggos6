import "../pages/HomePage.css";

const TierCell = ({ key, id, cellLabel, image }) => {
  return (
    <div className="myBoxP" id={id} cellLabel={cellLabel}>
      {cellLabel}
    </div>
  );
};

export default TierCell;
