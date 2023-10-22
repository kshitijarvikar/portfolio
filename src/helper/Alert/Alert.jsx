import './alert.css'
import React from 'react'
import Marquee from 'react-fast-marquee'

const Alert = () => {
  return (
    <div className='line'>
      <Marquee gradient={false} speed={70} direction='right' pauseOnHover>
        <span className="text1"> This portfolio is still under development. | </span>
        <span className="text1"> You can Contribute to this website  | </span>
        <span className="text1"> This is not mobile responsive yet. | </span>
        <span className="text1"> You can Contribute to this website. | </span>
        <span className="text1"> This is not mobile responsive yet. | </span>
      </Marquee>
    </div>
  )
}

export default Alert
