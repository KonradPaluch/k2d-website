import React from 'react';
import './Hero.scss';
import { ReactComponent as ScrollDown } from '../Assets/scroll-down.svg'
import { Link } from 'react-scroll';

export const Hero = () => {
    return(
        <div id='home' className='m-hero__container'>
            <div className='a-hero__main'>
                Kompleksowa obsługa Twojego systemu SAP
            </div>
            <div className='a-hero__desc'>
                K2D to zespół ekspertów gotowy realizować wszelkie zadania związane z utrzymaniem i rozwojem systemu SAP.
            </div>
            <Link containerId='app' offset={-100} to='services' smooth={true}><button className='a-hero__cta'>Sprawdź nasze usługi</button></Link>
            <Link containerId='app' offset={-100} to='services' smooth={true}><ScrollDown className='a-hero__scroll'/></Link>
        </div>
    )
}