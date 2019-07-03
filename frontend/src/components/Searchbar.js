import React from 'react';

const Searchbar = (props) => {
  return (
    <div className="filter">
    <input onChange={(e)=> props.searchNotes(e)}
      id="search-bar"
      type="text"
      placeholder="Search" className="mr-sm-2"/>
  
  </div>
  );
}

export default Searchbar;
