import React from 'react'

import serti from '../assets/images/serti.jpg'
import diplom from '../assets/images/diplom.jpg'
import aboutMine from '../assets/images/aboutMine2.png'

export const About = () => {
  return (
    <section id='about' className='about'>
        <div className="container">
            <h2 className="about-title">ОБО МНЕ</h2>
            <div className="about-content">
                <div className="about-mine ">
                    <div className="triangle"></div>
                    <img src={aboutMine} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, cupiditate tempora, culpa est molestias tempore architecto enim, nulla repellat eligendi maxime quis! Veniam, illum at pariatur sed quisquam rerum cupiditate voluptatibus ratione vel ipsam ullam est veritatis ipsum hic dolore?</p>
                </div>
                <div className="about-diplom">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aliquid voluptatibus dolor odit accusamus, fuga nam. Quod sunt expedita, deleniti veritatis id magni doloremque sed officiis itaque incidunt! Minus omnis exercitationem, aut beatae eaque repellendus earum quia dolore laudantium deserunt.</p>
                    <img src={diplom} alt="" />
                </div>
                <div className="about-sertificat">
                    <img src={serti} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, cupiditate tempora, culpa est molestias tempore architecto enim, nulla repellat eligendi maxime quis! Veniam, illum at pariatur sed quisquam rerum cupiditate voluptatibus ratione vel ipsam ullam est veritatis ipsum hic dolore?</p>
                </div>
            </div>
        </div>
    </section>
  )
}
