import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Search.css";
import { useContext } from 'react';
import searchContext from '../Context/Search/SearchContext';

export default function Search() {
    const searchData = useContext(searchContext);

    const handleSearchedInput = () => {
        if(document.getElementById("searchQuery").value!==""){
            searchData.setsearchQuery(document.getElementById("searchQuery").value);
        }
        else{
            document.getElementById("logo-Name").click();
        }
    }
    return (
        <>
            <div className='searchSection '>
                <div className="container" style={{ display: "flex", justifyContent: "center" }}>
                    <div id="searchBox">
                        <div id="SearchIcon"><img src="Logo/sangeet Logo.png" alt="find" height="30px" /></div>
                        <input id="searchQuery" type="text" placeholder="Find your song here..." />
                        <span onClick={handleSearchedInput}> <Link to="/SearchResults" ><img height="30px" src="https://img.icons8.com/ios-filled/90/000000/arrow.png" alt='' /></Link></span>
                    </div>
                </div>

                <Link to="/Explore"> <button id="exploreBtn">Explore</button></Link>
            </div>
        </>
    )
}

