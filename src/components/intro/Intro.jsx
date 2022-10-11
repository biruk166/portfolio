import React from 'react'
import './Intro.css'
import kid from './kid.PNG';
//imported component
import Button from '../button/Button'


export default function Intro() {
  return (
    <div className='intro-main-container'>
        {/* <p className='hello-you'>HELLO YOU,</p> */}
        <div className='profile-picture'>
            <img src={kid} alt="kid smiling" />
        </div>

        <div className='stripe'>
            <div>1</div>
            <h4>HELLO</h4>
            <p>Biruk Cherie</p>
            <div className='contact-me'>
                <Button name={'CONTACT ME'}/> 
            </div>
        </div>
        {/* <div className='container box-one'>
            <div className='intro-container'>
                <p>MY NAME IS</p>
                <h1>BIRUK CHERIE 1</h1>
                <p>This page shares my best articles to read on 
                    topics like health, happiness, creativity, 
                    productivity and more. The central question 
                    that drives my work is, “How can we live better?” 
                    To answer that question, I like to write about 
                    science-based ways to solve practical problems.
                </p>
            </div>
        </div>
        <div className='container box-two'>
            <div className='intro-container'>
                <p>MY NAME IS </p>
                <h1>BIRUK CHERIE 2</h1>
                <p>This page shares my best articles to read on 
                    topics like health, happiness, creativity, 
                    productivity and more. The central question 
                    that drives my work is, “How can we live better?” 
                    To answer that question, I like to write about 
                    science-based ways to solve practical problems.
                </p>
            </div>
        </div> */}

        
        
        
    </div>
  )
}
