import "./App.css";
import { useState } from "react";
import ImageList from "./components/imageList";
import CheckboxFilter from "./components/checkboxFilter";

function App() {
  const [filterList, setFilterList] = useState(new Set());
  const handleFilter = (e) => {
    console.log(e.target.name);
    const tempFilter = new Set(filterList);

    if (tempFilter.has(e.target.name)) {
      tempFilter.delete(e.target.name);
    } else {
      tempFilter.add(e.target.name);
    }
    setFilterList(tempFilter);
  };
  return (
    <div>
      <div className="header">
        <div>Window Gallery</div>
      </div>
      <div className="mainContainer">
        <CheckboxFilter handleFilter={handleFilter} />
        <ImageList filterList={filterList} />
      </div>
    </div>
  );
}

export default App;
