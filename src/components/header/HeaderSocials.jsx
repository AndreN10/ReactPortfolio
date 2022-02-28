import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiFacebook} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/andre-グエン-a7b63521a" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/AndreN10" target="_blank"><FaGithub/></a>
        <a href="https://www.facebook.com/lifrceu.morningstar.666" target="_blank"><FiFacebook/></a>
    </div>
  )
}

export default HeaderSocials