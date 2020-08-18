import React from "react";

function Searchbar(props){
    return (
        <input
        type="text"
        placeholder="search here"
        value={props.search}
        onChange={props.searchChange}/>
    )
}

export default Searchbar;