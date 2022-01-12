import React from 'react'
import '../Styles/SearchResults.css';
import "../Styles/Search.css";
import SongResultBar from './SongResultBar';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import searchContext from '../Context/Search/SearchContext';
import '../Styles/SongResultBar.css';


export default function SearchResults() {
    let results = [];
    const [data, setData] = useState({ resultList: results, loading: false });
    const searchData = useContext(searchContext);

    const handleSearchedInput = () => {
        searchData.setsearchQuery(document.getElementById("searchQuery").value);
    }



    useEffect(async () => {
        let url = `https://jiosaavn-api-v3.vercel.app/search?query=${searchData.searchQuery}`;
        let data = await fetch(url);
        let parsedData = await data.json();

        let tempDataArray = [];
        for (let i = 0; i < parsedData.results.length; i++) {
            let url2 = parsedData.results[i].api_url.song;
            let data2 = await fetch(url2);
            let parsedData2 = await data2.json();
            tempDataArray.push(parsedData2);
        }

        setData({ resultList: tempDataArray })
        //parsedData.results is an array 
        //parsedData.results[i].api_url.song  is an url for level2 data
    }, [handleSearchedInput])



    return (
        <div className='container fit-content' style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
            <div id="searchBox">
                <div id="SearchIcon"><img src="Logo/sangeet Logo.png" alt="find" height="30px" /></div>
                <input style={{ width: "99%" }} id="searchQuery" type="text" placeholder="Find your song here..." />
                <img onClick={handleSearchedInput} style={{ cursor: "pointer" }} height="30px" src="https://img.icons8.com/ios-filled/90/000000/arrow.png" alt='' />
            </div>

            <div className="searchResults my-4">
                <div className="container">    Results for <i>"{searchData.searchQuery}"</i></div>

                {data.resultList.map((element) => {
                    return <SongResultBar key={element.id} songImgSrc={element.images['50x50']} songTitle={element.song} singers={element.singers} audio={element.media_url} duration={element.duration} />
                })}

            </div>
        </div>
    )
}