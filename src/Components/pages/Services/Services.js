import React from 'react'
import './services-style.css'



const WebDesign = ["/images/ia_200000014.png", "/images/ia_200000015.png", "/images/ia_200000016.png",
    "/images/ia_200000017.png", "/images/ia_200000018.png", "/images/ia_200000019.png",
    "/images/ia_200000020.png", "/images/ia_200000021.png"];
    
// const ServiceName = ["Business Analysis", "Reports Analysis", "Profit Planning", "Project Reporting",
//     "Estate Planning", "Security Enhanced", "Cloud Computing", "Cryptocurrency"];

const Services = () => {
    return (
        <div className="container">
            <div className="service-wrapper">
                <div className="services-wrap">
                    <span className="sub-text">Services</span>
                    <h3 className="title-ser">Our Best Services</h3>
                </div>
                <div className="services-tag">
                    <div className="service-tag-wrapper">
                        {
                            WebDesign?.map((value) => {
                                return (
                                    <div className="services-wrap-box">

                                        <div className="first-wrap-service">
                                            <div>
                                                <img src={value} alt="web img" className="img-ser" />
                                            </div>
                                            <div>
                                                <h5 className="heading-text">Business Analysis</h5> <br />
                                                <p>We always provide people a<br /> complete solution focused of<br /> any business.</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>

                    {/* <div className="services-wrap-box">
                            <div className="first-wrap">
                                <div>
                                    <img
                                        src="./images/ia_200000015.png"
                                        alt="logo"
                                        className="elem-img"
                                    />
                                </div>
                                <div>
                                    <h5 className="heading-text">Reports Analysis</h5> <br />
                                    <p>We always provide people a<br /> complete solution focused of<br /> any business.</p>
                                </div>
                            </div>
                        </div> */}

                    {/* <div className="services-wrap-box">
                            <div className="first-wrap">
                                <div>
                                    <img
                                        src="./images/ia_200000016.png"
                                        alt="logo"
                                        className="elem-img"
                                    />
                                </div>
                                <div>
                                    <h5 className="heading-text">Profit Planning</h5> <br />
                                    <p>We always provide people a<br /> complete solution focused of<br /> any business.</p>
                                </div>
                            </div>
                        </div> */}

                    {/* <div className="services-wrap-box">
                            <div className="first-wrap">
                                <div>
                                    <img
                                        src="./images/ia_200000017.png"
                                        alt="logo"
                                        className="elem-img"
                                    />
                                </div>
                                <div>
                                    <h5 className="heading-text">Project Reporting</h5> <br />
                                    <p>We always provide people a<br /> complete solution focused of<br /> any business.</p>
                                </div>
                            </div>
                        </div> */}
                </div>
            </div>

        </div>
    )
}

export default Services
