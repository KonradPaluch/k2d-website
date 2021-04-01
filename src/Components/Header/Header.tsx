import React, { useState } from 'react';
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
        setNavBarMod('close');
    }
    const noDisplay = () => {
        if(navBarMod === 'close'){
            setNavBarMod('close hidden');
        }
    }

    
    return( 
        <div className='m-header__container'>
            <CompanyLogo/>
            <div className='a-navBar__button' onClick={()=>{showMenu()}}> <BurgerMenu/></div>
            <div className={`m-header__navBar ${navBarMod}`} onAnimationEnd={()=>{noDisplay()}}>
                <div onClick={()=>{hideMenu()}} className='a-navBar__background'/>
                <div className='a-navBar__controls'>
                    <ul className='a-navBar__list'>
                        <li>Strona główna</li>
                        <li>Usługi</li>
                        <li>Kontakt</li>
                    </ul>
                    <div className='a-navBar__close' onClick={()=>{hideMenu()}}><CloseMenu/></div>
                </div>
            </div>
        </div>
    )
}