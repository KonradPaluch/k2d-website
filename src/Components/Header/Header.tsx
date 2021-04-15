import React, { useState } from 'react';
import { Link } from 'react-scroll'
import './Header.scss';
import { ReactComponent as CompanyLogo } from '../Assets/Logomark.svg';
import { ReactComponent as BurgerMenu } from '../Assets/burger-menu.svg';
import { ReactComponent as CloseMenu } from '../Assets/closeMenu.svg';

export const Header : React.FC = () => {
    const [navBarMod, setNavBarMod] = useState('hidden')

    const showMenu = () => {
        setNavBarMod('open');
    }
    const hideMenu = () => {
        if(navBarMod === 'open'){
            setNavBarMod('close');
        } 
    }
    const noDisplay = () => {
        if(navBarMod === 'close'){
            setNavBarMod('hidden');
        }
    }
    
    return( 
        <div className={`m-header__container ${navBarMod}`}>
            <CompanyLogo/>
            <div className='a-navBar__button' onClick={()=>{showMenu()}}> <BurgerMenu/></div>
            <div className={`m-header__navBar ${navBarMod}`} onAnimationEnd={()=>noDisplay()}>
                <div onClick={()=>{hideMenu()}} className='a-navBar__background'/>
                <div className='a-navBar__controls'>
                    <ul className='a-navBar__list'>
                        <li><Link containerId='app' offset={-150} to='home' className='a-navBar__item' onClick={()=>hideMenu()} activeClass='active' spy={true} smooth={true}>Strona główna</Link></li>
                        <li><Link containerId='app' offset={-100} to='services' className='a-navBar__item' onClick={()=>hideMenu()} activeClass='active' spy={true} smooth={true}>Usługi</Link></li>
                        <li><Link containerId='app' offset={-100} to='contact' className='a-navBar__item' onClick={()=>hideMenu()} activeClass='active' spy={true} smooth={true}>Kontakt</Link></li>
                    </ul>
                    <div className='a-navBar__close' onClick={()=>hideMenu()}><CloseMenu/></div>
                </div>
            </div>
        </div>
    )
}