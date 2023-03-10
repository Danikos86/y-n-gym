import React from 'react'
import tg from '../assets/icon/tg.svg'
import insta from '../assets/icon/insta.svg'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="container">
            <div className="footer-content">
                <div className="social-links">
                    <a className='social-tg' href="https://t.me/Yaroslavned">
                        <img src={tg} alt="tg" />
                    </a>
                    <a className='social-insta' href="https://www.instagram.com/yaroslavned8/">
                        <img src={insta} alt="insta" />
                    </a>
                </div>
                <div className="copyright">
                    <p><span>©️</span>byDaniNova</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer