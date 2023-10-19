import React from 'react'
import "./socials.css"
import { FaGithub, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { AiOutlineLinkedin } from 'react-icons/ai'


const Socials = () => {
  return (
    <div className='container'>
      <a href="https://github.com/kshitijarvikar" className='s-icons' target='_blank' rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://github.com/kshitijarvikar" className='s-icons'target='_blank' rel="noopener noreferrer">
        <FaXTwitter />
      </a>
      <a href="https://github.com/kshitijarvikar" className='s-icons' target='_blank' rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://github.com/kshitijarvikar" className='s-icons' target='_blank' rel="noopener noreferrer">
        <AiOutlineLinkedin />
      </a>
    </div>
  )
}

export default Socials
