import React, { useEffect } from 'react'
import "./socials.css"
import { FaGithub, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { AiOutlineLinkedin } from 'react-icons/ai'
import Aos from 'aos'
import "aos/dist/aos.css"


const Socials = () => {

  useEffect(() => {
    Aos.init({duration: 1000, once: true});
  }, []);

  return (
    <div className='container' data-aos="fade-left">
      <a href="https://github.com/kshitijarvikar" className='s-icons' target='_blank' rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://x.com/kshitij_html?s=09" className='s-icons'target='_blank' rel="noopener noreferrer">
        <FaXTwitter />
      </a>
      <a href="https://instagram.com/kshitijj_2310?igshid=OGQ5ZDc2ODk2ZA==" className='s-icons' target='_blank' rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://www.linkedin.com/in/kshitij-arvikar-5503b421a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='s-icons' target='_blank' rel="noopener noreferrer">
        <AiOutlineLinkedin />
      </a>
    </div>
  )
}

export default Socials
