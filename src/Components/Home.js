import React from 'react'
import '../Styles/Home.css';
import IntroDesign from './IntroDesign';
import Search from './Search';

export default function Home() {

    return (
        <div id="Home" >
            <IntroDesign/>
             <Search /> 
        </div>
    )
}
