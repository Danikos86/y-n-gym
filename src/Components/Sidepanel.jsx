import React from 'react'
import tg from '../assets/icon/tg.svg'
import insta from '../assets/icon/insta.svg'

const Sidepanel = () => {
  return (
    <div class="sidepanel">
        <div class="sidepanel__text"><span>Социальные сети</span></div>
        <div class="sidepanel__divider"></div>
        <a href="https://t.me/Yaroslavned" class="sidepanel__icon">
            <img src={tg} alt="tg" />
        </a>
        <a href="https://www.instagram.com/yaroslavned8/" class="sidepanel__icon">
            <img src={insta} alt="insta" />
        </a>
    </div>
  )
}

export default Sidepanel