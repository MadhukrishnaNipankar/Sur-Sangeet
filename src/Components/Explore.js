import React from 'react';
// import FavouriteSection from './FavouriteSection';
import { useState } from 'react';
import { useEffect } from 'react';


export default function Explore() {
    const [displayState, setdisplayState] = useState("none");
    let dataArray = [];


    const fetchDataFromlocalStorage = () => {
        if (localStorage.length !== 0) {
            setdisplayState("block");
            let i;
            for (i = 0; i <= localStorage.length - 1; i++) {
                dataArray.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            }
        }
    }

    useEffect(() => {
        fetchDataFromlocalStorage();
    })

    return (
        <>
            <div style={{ display: `${displayState}` }}>
                {/* <FavouriteSection id={1} key={1} songImgSrc={"element.img"} songTitle={"element.title"} singers={"element.singers"} audio={"element.audio"} duration={"element.duration"} /> */}
                This will be updated soon
            </div>
        </>
    )
}
