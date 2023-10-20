import React, { useRef } from 'react'
import "./contact.css"
import Phone from "../../images/phone.png"
import Email from "../../images/email.png"
import Address from "../../images/address.png"

const Contact = () => { 
  const formRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='contact'>
      {/* right green background */}
      <div className="c-bg"></div>
      <div className="contact-wrapper">
        {/* left side */}
        <div className="contact-left">
          <h1 className="title">Contact Me Here!!</h1>
          <div className="info">
            <div className="info-item">
              <img 
                src={ Phone }
                alt='phone'
                className='c-icons'
              />
              +91 7249021189
            </div>
            <div className="info-item">
              <img 
                src={ Email }
                alt='email'
                className='c-icons'
              />
              kshitijuarvikar849@gmail.com
            </div>
            <div className="info-item">
              <img 
                src={ Address }
                alt='address'
                className='c-icons'
              />
              Pune
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="contact-right">
          <p className="desc">
            <b>What's your story?</b> Get in touch. I am always open for suggestions.
          </p>
          <form ref={ formRef } onSubmit={handleSubmit} >
            <input type="text" placeholder='Your Name' name="user_name"/>
            <input type="text" placeholder='Subject' name="user_subject"/>
            <input type="email" placeholder='Your Email' name="user_email"/>
            <textarea name="message" id="" rows="8" placeholder='Message' className="message"></textarea>
            <button>Send</button>
          </form>
        </div>
      </div>      
    </div>
  )
}

export default Contact
