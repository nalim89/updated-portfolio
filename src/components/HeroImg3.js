import './HeroImg3Styles.css';

import React, { Component } from 'react';

import IntoImg from '../assets/office3.jpeg'

class HeroImg3 extends Component {
    render() {

    return <div className='hero'>
        <div className='mask'>
            <img className='into-img' src={IntoImg} alt='IntoImg'/>
        </div>
        <div className='content'>
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
        </div>
    </div>
    }
};

export default HeroImg3;