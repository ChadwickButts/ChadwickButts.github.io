// import { SearchBarPropTypes } from '../Helpers/Types';
'use client'

import { ChangeEvent, useState } from "react";

function SearchLocation({ onSearchClick } : { onSearchClick: (id: string) => void }) {
    const [userInput, setUserInput] = useState('');

    const handleEnterPress = (event: React.KeyboardEvent) => {
        if (event.key === "Enter" || event.key === "NumpadEnter") {
            handleSearchClick();
        }
    }

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUserInput(event.currentTarget.value);     
    }
 
     const handleSearchClick = () => {
        onSearchClick(userInput);
     }

     return(
        <div id="searchFieldContainer">
            <input id="searchField" type="text" placeholder="Search City or Zip Code" onChange={handleSearchChange} onKeyUp={handleEnterPress}></input>
            <button id="searchBtn" type="button" onClick={handleSearchClick} >
                <span className="material-icons md-18">search</span>
            </button>
        </div>
    );
}

export default SearchLocation;