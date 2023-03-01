import React, { useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';

import mainPhoto from '../assets/images/Main.png'



const Main = () => {

    return (
        <section id='main' className='main'>
            <div className="container">
                <div className="main-content">
                    <div className="main-text">
                        <div className='background'>
                            <span></span>
                        </div>
                        <h3>The engineer <br /> of <br /> your body</h3>
                        <p>
                        </p>
                    </div>
                    <div className="main-img">
                        <div className="left-triangle"></div>
                        <div className="right-triangle"></div>
                        <img src={mainPhoto} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Main;