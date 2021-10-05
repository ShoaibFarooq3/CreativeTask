import React from 'react'
import "./navbar-style.css"

const Navbar = () => {
    return (
        <div className="container">
            <div className="menu-area">
                <div className="navbar">
                    <div>
                        <img src="./images/ia_100000004.png" alt="logo" className="img-logo"></img>
                    </div>
                    <div className="list-item">
                        <ul className="ul-wrap">
                            <li className="li-wrap">Home</li>
                            <li className="li-wrap">About</li>
                            <li className="li-wrap">Gallery</li>
                            <li className="li-wrap">Team</li>
                            <li className="li-wrap">Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
