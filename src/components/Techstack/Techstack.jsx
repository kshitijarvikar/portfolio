import './techstack.css'
import React, { useEffect } from 'react'
import Marquee from 'react-fast-marquee'
import { stack1, stack2 } from '../../helper/stacks'
import Aos from 'aos'
import "aos/dist/aos.css"

const TechStack = () => {
    useEffect(() => {
        Aos.init({duration: 1000, once: true})
    }, [])
  return (
    <div className='main-contain' data-aos="fade-up">
      <div className="head-title">
        <hr className='line-left'/>
        <hr className="line-right" />
        <h1 className="h-title">WHAT POWERS MY WORK</h1>
      </div>

      <div className='stacks-container'>
        <Marquee gradient={false} speed={70} direction='right' pauseOnHover>
            {stack1.map((stack) => (
                <div className="stacks" key={stack.id}>
                    <img src={stack.img} alt=""  />
                    <div className="info">
                      <h1 className="info-name">{stack.name}</h1>
                      {/* <p className="info-desc">{stack.desc}</p> */}
                    </div>
                </div>
            ))}
        </Marquee>
      </div>
      <div className="stacks-container2">
        <Marquee gradient={false} speed={70} direction='left' pauseOnHover>
            {stack2.map((stack) => (
                <div className="stacks" key={stack.id}>
                    <img src={stack.img} alt="" />
                    <div className="info">
                      <h1 className="info-name">{stack.name}</h1>
                      {/* <p className="info-desc">{stack.desc}</p> */}
                    </div>
                </div>
            ))}
        </Marquee>
      </div>
    </div>
  )
}

export default TechStack
