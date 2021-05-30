import React from "react";

function checkboxFilter({ handleFilter }) {
  return (
    <div>
      <h1>Checkbox filter</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <input type="Checkbox" name="front" onChange={handleFilter} />
          Front Window
        </div>
        <div>
          <input type="Checkbox" name="right" onChange={handleFilter} />
          Right Window
        </div>
        <div>
          <input type="Checkbox" name="left" onChange={handleFilter} />
          Left Window
        </div>
        <div>
          <input type="Checkbox" name="back" onChange={handleFilter} />
          Back Window
        </div>
      </div>
    </div>
  );
}

export default checkboxFilter;
