import React from "react";

export default function Search(props) {
  return (
    <div className="search">
      <input
        type="text"
        name="search"
        placeholder="Enter Movie Name"
        onChange={(e) => props.getSearchData(e.target.value)}
        autoComplete="off"
      />
    </div>
  );
}
