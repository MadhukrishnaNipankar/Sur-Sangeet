import React from 'react'
import '../Styles/SongResultBar.css';


export default function FavouriteSection(props) {
    return (
        <a href={props.audio} className="SongResultBarAnchor" target="_blank" rel="noreferrer">
        <div className='container SongResultBar'>
            <div className="songImage"><img src={props.songImgSrc} alt="" /></div>
            <div className="songInfo">
                <div className="songTitle">{props.songTitle}</div>
                <div className="singers">{props.singers} | {props.duration}</div>
            </div>
        </div>
    </a>
    )
}
