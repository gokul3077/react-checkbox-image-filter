import React from "react";

import frontWindow from "../images/frontWindow.jpg";
import rightWindow from "../images/rightWindow.jpg";
import leftWindow from "../images/leftWindow.jpg";
import backWindow from "../images/backWindow.jpg";

const imageArray = {
  front: {
    id: 11,
    image: frontWindow,
    itemsCount: 6,
  },
  right: {
    id: 12,
    image: rightWindow,
    itemsCount: 6,
  },
  left: {
    id: 13,
    image: leftWindow,
    itemsCount: 6,
  },
  back: {
    id: 14,
    image: backWindow,
    itemsCount: 6,
  },
};

function ImageList({ filterArray }) {
  const list = [...filterArray];
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        flexGrow: 1,
      }}
    >
      {list?.length > 0 ? (
        list?.map((item) => (
          <img
            style={{
              height: "300px",
              margin: "10px",
              width: "300px",
              justifyContent: "center",
            }}
            src={imageArray[item].image}
            alt={item.name}
          />
        ))
      ) : (
        <div style={{ margin: "auto" }}>Please select any Windows</div>
      )}
    </div>
  );
}

export default ImageList;
