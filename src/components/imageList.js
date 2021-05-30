import React from "react";

import frontWindow from "../images/frontWindow.jpg";
import rightWindow from "../images/rightWindow.jpg";
import leftWindow from "../images/leftWindow.jpg";
import backWindow from "../images/backWindow.jpg";

import "../styles/imageList.css";

const imageListData = {
  front: {
    name: "Front Window",
    id: 11,
    image: frontWindow,
    itemsCount: 6,
  },
  right: {
    name: "Right Window",
    id: 12,
    image: rightWindow,
    itemsCount: 6,
  },
  left: {
    name: "Left Window",
    id: 13,
    image: leftWindow,
    itemsCount: 6,
  },
  back: {
    name: "Back Window",
    id: 14,
    image: backWindow,
    itemsCount: 6,
  },
};

function ImageList({ filterList }) {
  const list = [...filterList];
  return (
    <div className="imageListContainer">
      {list?.length > 0 ? (
        list?.map((item) => (
          <div className="imageContainer">
            <div>
              <img
                className="imageStyle"
                src={imageListData[item].image}
                alt={item.name}
              />
            </div>
            <div className="title">{imageListData[item].name}</div>
          </div>
        ))
      ) : (
        <div className="message">Please select any window</div>
      )}
    </div>
  );
}

export default ImageList;
