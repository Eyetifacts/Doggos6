import doggo from "../assets/dogIcons/Doggo__00.png";
import pic01 from "../assets/dogIcons/Picture__01.png";
import pic02 from "../assets/dogIcons/Picture__02.png";
import pic03 from "../assets/dogIcons/Picture__03.png";
import pic04 from "../assets/dogIcons/Picture__04.png";
import pic05 from "../assets/dogIcons/Picture__05.png";
import pic06 from "../assets/dogIcons/Picture__06.png";
import pic07 from "../assets/dogIcons/Picture__07.png";
import pic08 from "../assets/dogIcons/Picture__08.png";
import pic09 from "../assets/dogIcons/Picture__09.png";
import pic10 from "../assets/dogIcons/Picture__10.png";
import pic11 from "../assets/dogIcons/Picture__11.png";
import pic12 from "../assets/dogIcons/Picture__12.png";
import pic13 from "../assets/dogIcons/Picture__13.png";
import pic14 from "../assets/dogIcons/Picture__14.png";
import pic15 from "../assets/dogIcons/Picture__15.png";
import pic16 from "../assets/dogIcons/Picture__16.png";
import pic17 from "../assets/dogIcons/Picture__17.png";
import pic18 from "../assets/dogIcons/Picture__18.png";
import pic19 from "../assets/dogIcons/Picture__19.png";
import pic20 from "../assets/dogIcons/Picture__20.png";

// use currentTierIdCount to create unique tier ids
// use currentCellIdCont to create unique cell ids
// user currentImageIdCount to create unique image ids
export const uniqueCreatorObject = {
  currentTierIdCount: 0,
  currentCellIdCount: 0,
  currentImageIdCount: 0,
};

const INITIALGRID = [
  {
    id: "Tier00",
    cellArray: [
      {
        id: "labelTierCell00",
        cellLabel: "Tier00",
        cellStyle: "myLabelBox",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-00",
        cellLabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-01",
        cellLabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-02",
        cellLabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-03",
        cellLabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-04",
        cellLabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-05",
        cellLabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-06",
        cellLabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-07",
        cellLabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-08",
        cellLabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-09",
        cellLabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
    ],
  },
  {
    id: "Tier01",
    cellArray: [
      {
        id: "labelTierCell01",
        cellLabel: "Tier01",
        cellStyle: "myLabelBox",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-10",
        celllabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-11",
        celllabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-12",
        celllabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-13",
        celllabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-14",
        celllabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-15",
        celllabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-16",
        celllabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-17",
        celllabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-18",
        celllabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-19",
        celllabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
    ],
  },
  {
    id: "Tier02",
    cellArray: [
      {
        id: "labelTierCell02",
        cellLabel: "",
        cellStyle: "myLabelBox",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-20",
        celllabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-21",
        celllabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-22",
        celllabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-23",
        celllabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-24",
        celllabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-25",
        celllabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-26",
        celllabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-27",
        celllabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-28",
        celllabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-29",
        celllabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
    ],
  },
  {
    id: "Tier03",
    cellArray: [
      {
        id: "labelTierCell03",
        cellLabel: "",
        cellStyle: "myLabelBox",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-30",
        celllabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-31",
        celllabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-32",
        celllabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-33",
        celllabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-34",
        celllabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-35",
        celllabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-36",
        celllabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-37",
        celllabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-38",
        celllabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-39",
        celllabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
    ],
  },
  {
    id: "Tier04",
    cellArray: [
      {
        id: "labelTierCell04",
        cellLabel: "",
        cellStyle: "myLabelBox",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-40",
        celllabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-41",
        celllabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-42",
        celllabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-43",
        celllabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-44",
        celllabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-45",
        celllabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-46",
        celllabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-47",
        celllabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-48",
        celllabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-49",
        celllabel: "",
        cellStyle: "myBoxP",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageString: null,
          imageUrl: "",
          dropImgParent: "",
        },
      },
    ],
  },
  {
    id: "Tier10",
    cellArray: [
      {
        id: "labelTierCelll0",
        cellLabel: "Label10",
        cellStyle: "myLabelBox",
        image: {
          type: "",
          draggable: false,
          imageId: "",
          imageUrl: "",
          dropImgParent: "",
        },
      },
      {
        id: "target-100",
        celllabel: "target-100",
        cellLocation: "item-image-cell100",
        cellStyle: "myBoxP",
        image: {
          type: "IMAGE",
          draggable: true,
          imageId: "Picture__01.png",
          imageString: pic01,
          imageUrl: "img/FrenchBulldog1.png",
          dropImgParent: "target-100",
        },
      },
      {
        id: "target-101",
        cellText: "",
        cellLocation: "item-image-cell1",
        cellStyle: "myBoxP",
        image: {
          type: "IMAGE",
          draggable: true,
          imageId: "Picture__02.png",
          imageString: pic02,
          imageUrl: "img/FrenchBulldog1.png",
          currentImgDivId: "target-101",
          dropImgLoc: "",
          dropImgParent: "parentContainer10",
        },
      },
      {
        id: "target-102",
        cellText: "",
        cellLocation: "item-image-cell2",
        cellStyle: "myBoxP",
        image: {
          type: "IMAGE",
          draggable: true,
          imageId: "Picture__03.png",
          imageString: pic03,
          imageUrl: "img/FrenchBulldog1.png",
          currentImgDivId: "target-102",
          dropImgLoc: "",
          dropImgParent: "parentContainer10",
        },
      },
      {
        id: "target-103",
        cellText: "",
        cellLocation: "item-image-cell3",
        cellStyle: "myBoxP",
        image: {
          type: "IMAGE",
          draggable: true,
          imageId: "Picture__04.png",
          imageString: pic04,
          imageUrl: "img/FrenchBulldog1.png",
          currentImgDivId: "target-103",
          dropImgLoc: "",
          dropImgParent: "parentContainer10",
        },
      },
      {
        id: "target-104",
        cellText: "",
        cellLocation: "item-image-cell4",
        cellStyle: "myBoxP",
        image: {
          type: "IMAGE",
          draggable: true,
          imageId: "Picture__05.png",
          imageString: pic05,
          imageUrl: "img/FrenchBulldog1.png",
          currentImgDivId: "target-104",
          dropImgLoc: "",
          dropImgParent: "parentContainer10",
        },
      },
      {
        id: "target-105",
        cellText: "",
        cellLocation: "item-image-cell5",
        cellStyle: "myBoxP",
        image: {
          type: "IMAGE",
          draggable: true,
          imageId: "Picture__06.png",
          imageString: pic06,
          imageUrl: "img/FrenchBulldog1.png",
          currentImgDivId: "target-105",
          dropImgLoc: "",
          dropImgParent: "parentContainer10",
        },
      },
      {
        id: "target-106",
        cellText: "",
        cellLocation: "item-image-cell6",
        cellStyle: "myBoxP",
        image: {
          type: "IMAGE",
          draggable: true,
          imageId: "Picture__07.png",
          imageString: pic07,
          imageUrl: "img/FrenchBulldog1.png",
          currentImgDivId: "target-106",
          dropImgLoc: "",
          dropImgParent: "parentContainer10",
        },
      },
      {
        id: "target-107",
        cellText: "",
        cellLocation: "item-image-cell7",
        cellStyle: "myBoxP",
        image: {
          type: "IMAGE",
          draggable: true,
          imageId: "Picture__08.png",
          imageString: pic08,
          imageUrl: "img/FrenchBulldog1.png",
          currentImgDivId: "target-107",
          dropImgLoc: "",
          dropImgParent: "parentContainer10",
        },
      },
      {
        id: "target-108",
        cellText: "",
        cellLocation: "item-image-cell8",
        cellStyle: "myBoxP",
        image: {
          type: "IMAGE",
          draggable: true,
          imageId: "Picture__09.png",
          imageString: pic09,
          imageUrl: "img/FrenchBulldog1.png",
          currentImgDivId: "target-108",
          dropImgLoc: "",
          dropImgParent: "parentContainer10",
        },
      },
      {
        id: "target-109",
        cellText: "",
        cellLocation: "item-image-cell9",
        cellStyle: "myBoxP",
        image: {
          type: "IMAGE",
          draggable: true,
          imageId: "Picture__10.png",
          imageString: pic10,
          imageUrl: "img/FrenchBulldog1.png",
          currentImgDivId: "target-109",
          dropImgLoc: "",
          dropImgParent: "parentContainer10",
        },
      },
      {
        id: "target-110",
        cellText: "",
        cellLocation: "item-image-cell0",
        cellStyle: "myBoxP",
        image: {
          type: "IMAGE",
          draggable: true,
          imageId: "Picture__11.png",
          imageString: pic11,
          imageUrl: "img/Beagle1.png",
          currentImgDivId: "target-110",
          dropImgLoc: "",
          dropImgParent: "parentContainer11",
        },
      },
      {
        id: "target-111",
        cellText: "",
        cellLocation: "item-image-cell1",
        cellStyle: "myBoxP",
        image: {
          type: "IMAGE",
          draggable: true,
          imageId: "Picture__12.png",
          imageString: pic12,
          imageUrl: "img/Beagle1.png",
          currentImgDivId: "target-111",
          dropImgLoc: "",
          dropImgParent: "parentContainer11",
        },
      },
      {
        id: "target-112",
        cellText: "",
        cellLocation: "item-image-cell2",
        cellStyle: "myBoxP",
        image: {
          type: "IMAGE",
          draggable: true,
          imageId: "Picture__13.png",
          imageString: pic13,
          imageUrl: "img/Beagle1.png",
          currentImgDivId: "target-112",
          dropImgLoc: "",
          dropImgParent: "parentContainer11",
        },
      },
      {
        id: "target-113",
        cellText: "",
        cellLocation: "item-image-cell3",
        cellStyle: "myBoxP",
        image: {
          type: "IMAGE",
          draggable: true,
          imageId: "Picture__14.png",
          imageString: pic14,
          imageUrl: "img/Beagle1.png",
          currentImgDivId: "target-113",
          dropImgLoc: "",
          dropImgParent: "parentContainer11",
        },
      },
      {
        id: "target-114",
        cellText: "",
        cellLocation: "item-image-cell4",
        cellStyle: "myBoxP",
        image: {
          type: "IMAGE",
          draggable: true,
          imageId: "Picture__15.png",
          imageString: pic15,
          imageUrl: "img/Beagle1.png",
          currentImgDivId: "target-114",
          dropImgLoc: "",
          dropImgParent: "parentContainer11",
        },
      },
      {
        id: "target-115",
        cellText: "",
        cellLocation: "item-image-cell5",
        cellStyle: "myBoxP",
        image: {
          type: "IMAGE",
          draggable: true,
          imageId: "Picture__16.png",
          imageString: pic16,
          imageUrl: "img/Beagle1.png",
          currentImgDivId: "target-115",
          dropImgLoc: "",
          dropImgParent: "parentContainer11",
        },
      },
      {
        id: "target-116",
        cellText: "",
        cellLocation: "item-image-cell6",
        cellStyle: "myBoxP",
        image: {
          type: "IMAGE",
          draggable: true,
          imageId: "Picture__17.png",
          imageString: pic17,
          imageUrl: "img/Beagle1.png",
          currentImgDivId: "target-116",
          dropImgLoc: "",
          dropImgParent: "parentContainer11",
        },
      },
      {
        id: "target-117",
        cellText: "",
        cellLocation: "item-image-cell7",
        cellStyle: "myBoxP",
        image: {
          type: "IMAGE",
          draggable: true,
          imageId: "Picture__18.png",
          imageString: pic18,
          imageUrl: "img/Beagle1.png",
          currentImgDivId: "target-117",
          dropImgLoc: "",
          dropImgParent: "parentContainer11",
        },
      },
      {
        id: "target-118",
        cellText: "",
        cellLocation: "item-image-cell8",
        cellStyle: "myBoxP",
        image: {
          type: "IMAGE",
          draggable: true,
          imageId: "Picture__19.png",
          imageString: pic19,
          imageUrl: "img/Beagle1.png",
          currentImgDivId: "target-118",
          dropImgLoc: "",
          dropImgParent: "parentContainer11",
        },
      },
      {
        id: "target-119",
        cellText: "",
        cellLocation: "item-image-cell9",
        cellStyle: "myBoxP",
        image: {
          type: "IMAGE",
          draggable: true,
          imageId: "Picture__20.png",
          imageString: pic20,
          imageUrl: "img/Beagle1.png",
          currentImgDivId: "target-119",
          dropImgLoc: "",
          dropImgParent: "parentContainer11",
        },
      },
    ],
  },
];

export default INITIALGRID;
