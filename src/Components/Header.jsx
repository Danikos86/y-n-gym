import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

import YN2 from '../assets/icon/logo.png'
import { AiOutlineHome } from 'react-icons/ai';
import { BsPlusCircle } from 'react-icons/bs'
import { SiAboutdotme } from 'react-icons/si'
import { RiContactsLine } from 'react-icons/ri'




const Header = () => {

    useEffect(() => {
        const list = document.querySelectorAll('.nav-item');

        function activeLink()  {
            list.forEach((item) => 
            item.classList.remove('active'));
            this.classList.add('active')
        } 
        list.forEach((item) => 
        item.addEventListener('click', activeLink))
    }, [])

    return (
        <header className='header' >
            <div className="container">
                <nav className='nav'>    
                    <button className="tel-button">
                        <a  className='tel' href="tel:+88005553535">ТЕЛЕФОН: 8-800-555-35-35</a>
                    </button>               
                    <a className="logo"  href='#'>                               
                        <img className='logo-img' src={YN2} alt="logo" />
                    </a>  
                    <ul className='nav-list'>
                        <li className='nav-item active' style={{ color: '#f00' }}>
                            <a className='nav-link' href='#main'>
                                <span className="icon"><AiOutlineHome/></span>
                            </a>
                        </li>
                        <li className='nav-item' style={{ color: '#faf' }}>
                            <a className='nav-link' href='#trainer'>
                                <span className="icon"> <BsPlusCircle/></span>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#about'>
                                <span className="icon"> <SiAboutdotme/> </span>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#contact'>
                                <span className="icon"> <RiContactsLine/> </span>
                            </a>
                        </li>
                        <div className="indicator"></div>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;