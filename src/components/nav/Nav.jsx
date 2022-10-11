import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import duck from './duck.gif';
import menu from './menu.svg'
import cancel_menu from './cancel_menu.svg'
//imports components
import Button from '../button/Button';


export default function Nav(){
    return (

        <header className='nav-main-container'>
            <img tabIndex={'1'} className='menu'  src={menu} alt="display menu icon" />
            <img  className='cancel-menu' src={cancel_menu} alt="display menu icon" />

            <section className='nav-container'>
               <div className='nav-item nav-item-style'>
                <Link to={'#'}> HOME </Link>
                </div>
                <div className='nav-item nav-item-style'>
                    <Link to={'#'}> PROJECTS </Link>
                </div>
                <div className='nav-item nav-item-style'>
                    <Link to={'#'}> RESUME </Link>
                </div>
                <div className='nav-item nav-item-style'>
                    <Link to={'#'}> ABOUT ME </Link>
                </div>
                <div className='nav-item nav-item-style'>
                    <Link to={'#'}> SKILLS </Link>
                </div>
                <div className='nav-item nav-item-style'>
                    <Link to={'#'}> CONTACT ME </Link>
                </div>
                
                <div className='nav-item button-nav'>
                    <Link to={'#'}><Button name={'LINKLDEN'}/></Link>
                    <img className='duck' src={duck} alt="duck dancing" />
                </div> 
            </section>
            
        </header>
    )
}
