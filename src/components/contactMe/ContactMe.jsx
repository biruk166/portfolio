import React from 'react'
import { Link } from 'react-router-dom';
import {AiOutlineMail, AiOutlineFacebook, AiOutlineTwitter,
        AiOutlineMessage, AiFillLinkedin, AiOutlineSend} from 'react-icons/ai';
import './ContactMe.css'

//imported component
import Button from '../button/Button'


const iconSize = 30;
const iconColor = 'white'
export default function ContactMe() {
  return (
      <div className='contact-me-container'>
          <div className='social'>
              <Link to={'#'}><AiOutlineMail color={iconColor} size={iconSize}/> </Link>
              <Link to={'#'}><AiOutlineFacebook color={iconColor} size={iconSize}/> </Link>
              <Link to={'#'}><AiOutlineTwitter color={iconColor} size={iconSize}/> </Link>
              <Link to={'#'}><AiOutlineMessage color={iconColor} size={iconSize}/> </Link>
              <Link to={'#'}><AiFillLinkedin color={iconColor} size={iconSize}/> </Link>
          </div>

            <form className='contact-me-email-form'>

                <div className='success'>
                    <textarea name="messenger" id="messenger" cols="30" rows="10"></textarea>
                    <Button name={'SEND'}><AiOutlineSend color={iconColor} size={iconSize}/></Button> 
                </div>
                
                <div className='input-container'>
                    <label> Enter your name</label><br />
                    <input className='user-input' type="text" name="text"  /> <br />  
                </div>
                
                <div className='input-container'>
                    <label > Enter your email</label><br />
                    <input className='user-input' type="email" name="email" />
                </div>

                <div className='text-box'>
                    <textarea name="text" id="" cols="30" rows="10"></textarea>
                </div>
                <Button name={'SEND'}/>
            </form>
      </div>
    
  )
}
