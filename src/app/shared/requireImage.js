function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  const turnToArray = Object.entries(images);
  let findIndex = turnToArray.find(
    (element) => element[0] === "Picture__05.png"
  );
  const theImg = images["Picture__05.png"];
  console.log(theImg);
  return images;
}

const images = importAll(
  require.context("../app/assets/dogIcons", false, /\.(png|jpe?g|svg)$/)
);

export default images;
