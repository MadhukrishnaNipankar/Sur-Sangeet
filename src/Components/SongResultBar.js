import React from 'react'
import '../Styles/SongResultBar.css';
import { useState } from 'react';
import { useEffect } from 'react';

export default function SongResultBar(props) {
    const [favourite, setFavourite] = useState({ favouriteState: false, favLogo: "Icons/star.svg" });
    useEffect(() => {
        if (localStorage.getItem(props.id) !== null) {
            setFavourite({ favouriteState: true, favLogo: "Icons/filled-star.svg" });
        }
    }, [])

    
    const HandleAddToFavourite = () => {
        if (favourite.favouriteState) {
            localStorage.removeItem(props.id);
            setFavourite({ favouriteState: false, favLogo: "Icons/star.svg" });
        }
        else {
            let favMusicData = {"audio":props.audio,"img": props.songImgSrc,"title": props.songTitle,"singers": props.singers, "duration":props.duration};
            localStorage.setItem(props.id, JSON.stringify(favMusicData));
            setFavourite({ favouriteState: true, favLogo: "Icons/filled-star.svg" });
        }
    }
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <a href={props.audio} className="SongResultBarAnchor" target="_blank" rel="noreferrer">
                    <div className='container SongResultBar'>
                        <div className="songImage"><img src={props.songImgSrc} alt="" /></div>
                        <div className="songInfo">
                            <div className="songTitle">{props.songTitle}</div>
                            <div className="singers">{props.singers} | {props.duration}</div>
                        </div>
                    </div>
                </a>
                <div className="addToFav">
                    <img onClick={HandleAddToFavourite} className="favourite" src={favourite.favLogo} alt="..." />
                </div>
            </div>
            <hr />
        </>

    )
}
