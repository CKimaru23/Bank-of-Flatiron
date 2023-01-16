import React from "react";

function Search({handleSearch}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleSearch}
      />
      <i></i>
    </div>
  );
}

export default Search;