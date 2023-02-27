import { Navbar, NavbarBrand } from "reactstrap";
import "../pages/HomePage.css";
import { dogImages } from "../constants";

// function importAll(r) {
//   let images = {};
//   r.keys().forEach((item, index) => {
//     images[item.replace("./", "")] = r(item);
//   });
//   return images;
// }

// const images = importAll(
//   require.context("../app/assets/dogIcons", false, /\.(png|jpe?g|svg)$/)
// );
// const fileName = `Doggo__00.png`;
// const doggoUrl = images[fileName];

const Header = () => {
  return (
    <Navbar dark color="primary" sticky="top" expand="md">
      <NavbarBrand className="ms-5" href="/">
        <img
          className="float-start"
          src={dogImages.Doggos}
          alt={""}
          width="100"
          height="100"
        />
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;
