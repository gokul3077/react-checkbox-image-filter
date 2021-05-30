import React from "react";

import frontWindow from "../images/frontWindow.jpg";
import rightWindow from "../images/rightWindow.jpg";
import leftWindow from "../images/leftWindow.jpg";
import backWindow from "../images/backWindow.jpg";

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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>
              {" "}
              <img
                style={{
                  height: "300px",
                  margin: "10px",
                  width: "300px",
                  justifyContent: "center",
                }}
                src={imageListData[item].image}
                alt={item.name}
              />
            </div>
            <div>{imageListData[item].name}</div>
          </div>
        ))
      ) : (
        <div style={{ margin: "auto" }}>Please select any Windows</div>
      )}
    </div>
  );
}

export default ImageList;
