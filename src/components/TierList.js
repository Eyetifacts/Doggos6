import "../pages/HomePage.css";
import { Container } from "reactstrap";
import Tier from "./Tier";

// ******************************************************
// ******************************************************
// ******************************************************
// ******************************************************

const TierList = () => {
  // const startGrid = {
  //   grid: JSON.parse(JSON.stringify(INITIALGRID1)),
  // };

  // const [tiers, setTiers] = useState(startGrid);

  // Collect the key drag and drop data from the child components

  // ToDo
  // Need to format rows with greater than 10 cells to have a max of 10 cells

  return (
    <Container className="myContainer">
      <Tier />
    </Container>
  );
};

export default TierList;
