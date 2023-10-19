import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <div className='contact'>
      <div className="c-bg"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="title">Contact Me Here!!</h1>
          <div className="info">
            <div className="info-item">
              +91 7249021189
            </div>
            <div className="info-item">
              kshitijuarvikar849@gmail.com
            </div>
            <div className="info-item">
              Pune
            </div>
          </div>
        </div>
        <div className="contact-right">
          <p className="desc">
            <b>What's your story?</b> Get in touch. I am always open for suggestions.
          </p>
          <form>
            <input type="text" placeholder='Your Name' name="user_name"/>
            <input type="text" placeholder='Subject' name="user_subject"/>
            <input type="email" placeholder='Your Email' name="user_email"/>
            <textarea name="message" id="" rows="5" placeholder='Message'></textarea>
            <button>Send</button>
          </form>
        </div>
      </div>      
    </div>
  )
}

export default Contact
