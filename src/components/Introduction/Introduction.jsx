import React, { useEffect } from 'react'
import "./Introduction.css"
// import Typewriter from 'typewriter-effect'
import Aos from 'aos'
import "aos/dist/aos.css"


const Introduction = () => {

  useEffect(() => {
    Aos.init({duration: 1000, once: true});
  }, []);


  return (
    <div className="intro" data-aos="fade-up">
        <div className="intro-left">
          <div className="left-wrapper">
            <h2 className="left-i">Hello, My name is</h2>
            <h1 className="left-name" data-aos="fade-left">Kshitij Arvikar..</h1>

            {/* <h2 className='new-head'>
              <span>I am a</span>
              <span className="anim">
                <Typewriter
                  options={{
                  strings: ["Frontend Developer.", "Software Engineer."],
                  autoStart: true,
                  loop: true,
                }}
              />
              </span>
            </h2> */}
            <div className="left-title">
              <div className="title-wrapper">
                <div className="title-item">FrontEnd Developer</div>
                <div className="title-item">Software Developer</div>
                <div className="title-item">Engineer</div>
                {/* <div className="title-item">Web Developer</div>
                <div className="title-item">Writter</div> */}
              </div>
            </div>
            <div className="desc">
            I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.
            </div>
          </div>
        </div>
        <div className="intro-right">
          <div className="i-bg"></div>
        </div>
    </div>
  )
}

export default Introduction
