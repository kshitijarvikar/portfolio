import React from 'react'
import "./Introduction.css"

const Introduction = () => {
  return (
    <div className="intro">
        <div className="intro-left">
          <div className="left-wrapper">
            <h2 className="left-i">Hello, My name is</h2>
            <h1 className="left-name">Kshitij Arvikar..</h1>
            <div className="left-title">
              <div className="title-wrapper">
                <div className="title-item">Web Developer</div>
                <div className="title-item">Engineer</div>
                <div className="title-item">UI/UX Desginer</div>
                <div className="title-item">Web Developer</div>
                <div className="title-item">Writter</div>
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
