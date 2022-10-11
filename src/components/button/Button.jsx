import React from 'react';
import {AiOutlineSend} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import './Button.css';

export default function Button(props) {
  return (
    <button type='button' className='general-button'>
        {props.name}
    </button>
  )
}
