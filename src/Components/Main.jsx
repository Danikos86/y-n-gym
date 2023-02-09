import React, { useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';

import mainPhoto from '../assets/images/mainPhoto.jpg'



const Main = () => {
    useEffect(() => {
        VanillaTilt.init(document.querySelector(".main-img"), {
            max: 35,
            speed: 300,
            startX: 20,
            startY: 10,
            
        }, []);
    })
    
    return (
        <section id='main' className='main'>
            <div className="container">
                <div className="main-content">
                    <div className="main-text">
                        <div className='background'>
                            <span></span>
                        </div>
                        <h3>The engineer of your body</h3>
                        <p>
                        </p>
                    </div>
                    <div className="main-img">
                        <img src={mainPhoto} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Main;