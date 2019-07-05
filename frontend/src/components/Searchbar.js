import React from 'react';

const Searchbar = (props) => {
  console.log(props)
  return (
    <div className="filter">
    <input onChange={(e)=>{props.Search(e)}}
      id="search-bar"
      type="text"
      placeholder="Search" className="mr-sm-2"/>
  
  </div>
  );
}

export default Searchbar;
