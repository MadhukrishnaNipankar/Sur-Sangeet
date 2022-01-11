import React from 'react'
import "../Styles/Navbar.css"
import { Link } from 'react-router-dom'

export default function Navbar() {

    let navbarStyle = {
        backgroundColor: "black",
        position: "relative",
        top: "0px",
        width: "100%",
        marginBottom: "2%",
    }

    return (

        <>
            <nav className=" navbar   navbar-expand-lg  navbar-dark " style={navbarStyle}>
                <div className="container-fluid " style={{
                    fontSize: "19px",
                    color: " #fff",
                    display: "flex"
                }}>
                    <Link id="logo-Name" className="navbar-brand" to="/">
                    <img src="Logo/sangeet Logo.png" alt="music" height="40px"/> SANGEET
                    </Link>

                     <div className="gif"><img height="60em"src="Images/anime.gif" alt="" /></div>
                </div>

               
            </nav>
        </>


    )
}
