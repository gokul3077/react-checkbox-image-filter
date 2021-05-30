import "./App.css";
import { useState } from "react";
import ImageList from "./components/imageList";
import CheckboxFilter from "./components/checkboxFilter";

function App() {
  const [filterArray, setFilterArray] = useState(new Set());
  const handleFilter = (e) => {
    console.log(e.target.name);
    // const tempFilterArray = imageArray.map(
    //   (item) => item.name == e.target.name
    // );
    const tempFilter = new Set(filterArray);

    if (tempFilter.has(e.target.name)) {
      tempFilter.delete(e.target.name);
    } else {
      tempFilter.add(e.target.name);
    }
    setFilterArray(tempFilter);
  };
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <CheckboxFilter handleFilter={handleFilter} />

      <ImageList filterArray={filterArray} />
    </div>
  );
}

export default App;
