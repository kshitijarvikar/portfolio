import React, { useEffect } from 'react'
import "./Navbar.css"
import Aos from 'aos'
import "aos/dist/aos.css"

const Navbar = () => {
  
  useEffect(() => {
    Aos.init({duration: 1000, once: true});
  }, []);

  return (
    <div data-aos="fade-down" className="nav">
      <p className="nav-left" data-aos="fade-right">KSHITIJ.ARVIKAR()</p>
      <ul className='list'>
        <li>About</li>
        <li>Contact</li>
        <li className='resume'>Resume</li>
      </ul>    
    </div>
  )
}

export default Navbar
