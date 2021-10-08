import React from 'react'
import "./About-style.css"

const About = () => {
    return (
        <div>
            <div className="about-wrap">
            <div className="container">
                <div className="text-right">      
                <div className="about-wrap-head">
                    <h3>About Us</h3>
                </div>
                <div>
                    <h4 className="p-bold">
                   Welcome to World Best <br /> Business Company 
                    </h4>
                </div>
                <div>
                    <div className="text-wrap-right">
                        <div className="zoom-in-zoom-out">
                            <img  src=" ./images/ia_200000012.png" alt="img"    />
                        </div>
                        <div className="text-font-right">
                            <h3> The ability to identify market-entry </h3>
                            <p>Neque porro quisquam est, qui dolorem ipsum quia
                                <br /> dolor sit amet eius modi tempora data. <br /><br /></p>
                        </div>
                    </div>
                    <div className="text-wrap-right">
                        <div>
                            <img  src=" ./images/ia_200000013.png" alt="img"    />
                        </div>
                        <div className="text-font-right">
                            <h3> Ensure to increase of expected sales </h3>
                            <p>Find remarkable ideas is that this text has been the
                                <br />industry's standard ever in business.</p>
                        </div>
                    </div>
                </div>

                </div>
            </div>
            </div>
            
        </div>
    )
}

export default About
