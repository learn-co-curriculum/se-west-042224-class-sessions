import React from "react";

function Search({ searchTerm, onChangeSearch }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input value={searchTerm} onChange={(e) => onChangeSearch(e.target.value)} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
