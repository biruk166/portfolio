import React from 'react';
import './button.css';

export const Button = (props) => {
  return (
    <button className='allbutton'>{props.name}</button>
  )
}
