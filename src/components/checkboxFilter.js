import React from "react";
import "../styles/checkbox.css";
function checkboxFilter({ handleFilter }) {
  return (
    <div className="filterContainer">
      <div className="filterCard">
        <div className="heading">Select your windows</div>

        <div className="checkBoxContainer">
          <div className="row">
            <div className="col">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                  onChange={handleFilter}
                  name="front"
                />
                <label
                  className="form-check-label messageSmall"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Front Window
                </label>
              </div>
            </div>

            <div className="col">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                  onChange={handleFilter}
                  name="right"
                />
                <label
                  className="form-check-label messageSmall"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Right Window
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                  onChange={handleFilter}
                  name="left"
                />
                <label
                  className="form-check-label messageSmall"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Left Window
                </label>
              </div>
            </div>

            <div className="col">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                  onChange={handleFilter}
                  name="back"
                />
                <label
                  className="form-check-label messageSmall"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Back Window
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default checkboxFilter;
