import React from 'react';
import './BrainStorming-style.css';


const BrainStorming = () => {
    return (
        <div className="container">
            <div className="brain-main-wrap">
                <div className="main-wrap-brain">
                    <div className="left-side-wrap">
                        <div>
                            <div className="text-class">
                                <span className="left-side-h1">Let's Start</span>
                            </div>
                            <div>
                                <h1 className="title-brain-inner">Start Your Business with <br /> brainstorming</h1>
                            </div>
                            <div className="progress-bar-div">
                                <p><b>Business</b></p>
                                <div className="progress-bar">
                                    <div className="skills html">90%</div>
                                </div><br />
                            </div>
                            <div className="progress-bar-div">
                                <p><b>Consulting</b></p>
                                <div className="progress-bar">
                                    <div className="skills css">85%</div>
                                </div> <br />
                            </div>
                            <div className="progress-bar-div">
                                <p><b>Strategy</b></p>
                                <div className="progress-bar">
                                    <div className="skills js">95%</div>
                                </div><br />
                            </div>
                            <div>
                                <button className="btn-brain-left">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="right-side-wrap">
                        <img
                            src="./images/ia_200000418.jpg"
                            alt="img-logo"
                            className="img-right-side-height"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BrainStorming
