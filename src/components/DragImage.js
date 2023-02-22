import "../pages/HomePage.css";

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

const cellImgDisplay = (currentParent, imgId, drag, isDragging) => {
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
        parent={currentParent}
        ref={drag}
        style={{
          opacity: isDragging ? 0.2 : 1,
          cursor: "move",
        }}
      />
    );
  }
};

const DragImage = ({ iId, currentParent }) => {
  // const [{ isDragging }, drag] = useDrag({
  //   item: {
  //     idOfImage: iId,
  //     originalParent: currentParent,
  //   },
  //   type: ItemTypes.IMAGEITEM,
  //   collect: (monitor) => ({
  //     isDragging: !!monitor.isDragging(),
  //   }),
  // });
  return cellImgDisplay(currentParent, iId);
};

export default DragImage;
