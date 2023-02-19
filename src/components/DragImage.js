import "../pages/HomePage.css";
import { ItemTypes } from "./IMAGEITEM";
import { useDrag } from "react-dnd";

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../app/assets/dogIcons", false, /\.(png|jpe?g|svg)$/)
);

const cellImgDisplay = (cellId, imgId) => {
  let cImg;
  if (imgId !== "") {
    cImg = images[imgId];
    return (
      <img
        className="float-start"
        alt={""}
        width="85%"
        height="85%"
        key={imgId}
        src={cImg}
        id={imgId}
        parent={cellId}
      />
    );
  }
};

const DragImage = ({ iId, currentParent }) => {
  return cellImgDisplay(currentParent, iId, drag, isDragging);
};

export default DragImage;
