import React from 'react'
import './navListStyle.css';

//The list items from the navigation bar
export const NavList = () => {
  return (
    <div className='nav-list-items'>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Skills</li>
        <li>Projects</li>
      </ul>
    </div>
  )
}
