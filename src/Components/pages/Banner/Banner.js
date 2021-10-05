import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner = () => {
    return (
        <div className="container">
            <div>
                <div>
                    <div >
                        <Carousel style={{ objectFit: 'cover' }} interval={2000}>
                            <Carousel.Item>
                                <img src="./images/ia_100000002673.jpg" alt="banner" height="500px" width="100%" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="./Images/ia_100000002673.jpg" alt="banner" height="500px" width="100%" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="./Images/ia_100000342.jpg" alt="banner" height="500px" width="100%" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="./Images/ia_100000345.jpg" alt="banner" height="500px" width="100%" />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
