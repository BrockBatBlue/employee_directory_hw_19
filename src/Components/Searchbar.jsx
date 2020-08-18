import React from "react";
import "../Styles/Searchbar.css";

function Searchbar(props){
    return (
        <input
        className="searchbar"
        type="text"
        placeholder="search here"
        value={props.search}
        onChange={props.searchChange}/>
    )
}

export default Searchbar;