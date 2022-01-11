import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Search.css";

export default function Search() {
    return (
        <>
            <div className='searchSection '>
                <div className="container" style={{ display: "flex", justifyContent: "center" }}>
                    <div id="searchBox">
                        <div id="SearchIcon"><img src="Logo/sangeet Logo.png" alt="find" height="30px" /></div>
                        <input id="searchQuery" type="text" placeholder="Find your song here..." /><Link to="/SearchResults"><img height="30px" src="https://img.icons8.com/ios-filled/90/000000/arrow.png" alt='' /></Link><button id="searchButton" className="mx-2" ></button>
                    </div>
                </div>

                <Link to="/Explore"> <button id="exploreBtn">Explore</button></Link>
            </div>
        </>
    )
}

