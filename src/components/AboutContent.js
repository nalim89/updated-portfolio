import './AboutContentStyles.css'

import React from 'react'
import { Link } from 'react-router-dom'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who Am I?</h1>
            <p>I am a developer</p>
            <Link to='/contact'>
                <button className='btn'>Contact</button>
            </Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src="http://via.placeholder.com/200x200" className='img' alt="placeholder" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent