import React from 'react';
import individualRation from '../assets/images/PersonalTrainer/pic1.jpg'
import train from '../assets/images/PersonalTrainer/pic2.jpg'
import method from '../assets/images/PersonalTrainer/pic3.jpg'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const Trainer = () => {
    const settings = {
        className: "",
        infinite: true,
        slidesToShow: 1,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
      };

    return (
        <section id='trainer' className='trainer'>
            <div className="container">
                <h2>Преимущества занятий с тренером</h2>
            <Slider className='trainer-slider' {...settings}>
                <div className='trainer-items'>
                    <img src={train} alt="" />
                    <p>Построение эффективного тренировочного процесса, за счет подбора оптимального комплекса упражнений с безопасным распределением нагрузки.</p>
                </div>
                <div className='trainer-items'>
                    <img src={method} alt="" />
                    <p>Применение знаний основ анатомии, физиологии и биомеханики, для достижение поставленных клиентом целей и развенчания общепринятых заблуждений и мифов в фитнес индустрии.</p>
                </div>
                <div className='trainer-items'>
                    <img src={individualRation} alt="" />
                    <p>Советы по питанию, в целях уменьшения или увеличения массы тела, расчет необходимой потребности калорий.</p>
                </div>
            </Slider>
            </div>          
        </section>
    );
};

export default Trainer;