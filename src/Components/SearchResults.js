import React from 'react'
import '../Styles/SearchResults.css';
import "../Styles/Search.css";

export default function SearchResults() {
    return (
        <div className='container fit-content' style={{ display: "flex",justifyContent: "center",flexDirection:"column" }}>
                <div id="searchBox">
                    <div id="SearchIcon"><img src="Logo/sangeet Logo.png" alt="find" height="30px" /></div>
                    <input id="searchQuery" type="text" placeholder="Find your song here..." /><img height="30px" src="https://img.icons8.com/ios-filled/90/000000/arrow.png" alt='' /><button id="searchButton" className="mx-2" ></button>
                </div>

                <div className="searchResults">
                    <h4>Search Results for : abc</h4>
                </div>
        </div>
    )
}
