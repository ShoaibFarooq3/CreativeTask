import React from 'react'
import "./footer-style.css";
import { FaRegAddressBook } from 'react-icons/fa';
import { MdPhone } from "react-icons/md";
import { MdOutgoingMail } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import { RiCalendar2Fill } from "react-icons/ri";


const Footer = () => {
    return (
        <div className="container">
            <div className="footer-main-wrapper">
                <div className="footer-flex-div">
                    <div className="footer-left-side">
                        <div className="footer-img">
                            <img
                                src="./images/ia_200000119.png"
                                alt="img"
                                className="footer-img-left"
                            />
                        </div>
                        <div>
                            <p className="para-footer">
                                <br /><br />
                                We denounce with righteous indignation in and <br />
                                dislike men who are so beguiled and to demo <br />
                                realized by the charms of pleasure moment, so<br />
                                blinded by desire, that they cannot foresee the<br />
                                pain and trouble that are bound.<br /><br />
                            </p>
                            <p className="footer-btn-div">
                                <a href="/home" className="btn-footer-left">Discover More</a>
                            </p>
                        </div>
                    </div>
                    <div className="footer-contact-info">
                        <div>
                            <h3>Contact info</h3>
                        </div>
                        <div>
                            <FaRegAddressBook className="icon-uni" />  374 William S Canning Blvd, Fall River <br /> MA 2721, USA
                        </div>
                        <div>
                            <MdPhone className="icon-uni" /> (+880)155-69569
                        </div>
                        <div>
                            <MdOutgoingMail className="icon-uni" /> support@rstheme.com
                        </div>
                        <div>
                            <MdAccessTime className="icon-uni" /> 10:00 - 17:00
                        </div>
                    </div>
                    <div className="footer-right-side">
                        <div>
                            <h3>Latest Posts</h3>
                        </div>
                        <div className="first-text-div">
                            <div>
                                <img src="./images/ia_200000120.jpg"
                                    alt="logo"
                                    className="img-foot"
                                >
                                </img>
                            </div>
                            <div>
                                <p>Whale be raised, it must be in a <br /> month</p>
                                <p> <RiCalendar2Fill className="icon-uni" /> January 18, 2021 </p>
                            </div>
                        </div>

                        <div className="first-text-div">
                            <div>
                                <img src="./images/ia_200000121.jpg"
                                    alt="logo"
                                    className="img-foot"
                                >
                                </img>
                            </div>
                            <div>
                                <p>Whale be raised, it must be in a <br /> month</p>
                                <p> <RiCalendar2Fill className="icon-uni" /> January 18, 2021 </p>
                            </div>
                        </div>
                        <div className="first-text-div">
                            <div>
                                <img src="./images/ia_200000122.jpg"
                                    alt="logo"
                                    className="img-foot"
                                >
                                </img>
                            </div>
                            <div>
                                <p>Whale be raised, it must be in a <br /> month</p>
                                <p> <RiCalendar2Fill className="icon-uni" /> January 18, 2021 </p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />

                <div className="copyright-footer">
                    © Copyright 2021 Iplex. All Rights Reserved.
                </div>
            </div>

        </div>
    )
}

export default Footer
