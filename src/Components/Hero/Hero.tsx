import React from 'react';
import './Hero.scss';
import { ReactComponent as ScrollDown } from '../Assets/scroll-down.svg'

export const Hero = () => {
    return(
        <div className='m-hero__container'>
            <div className='a-hero__main'>
                Kompleksowa obsługa Twojego systemu SAP HR
            </div>
            <div className='a-hero__desc'>
                K2D to zespół ekspertów gotowy realizować wszelkie zadania związane z utrzymaniem i rozwojem systemu SAP HR.
            </div>
            <button className='a-hero__cta'><div className='a-hero__text'>Sprawdź nasze usługi</div></button>
            <ScrollDown className='a-hero__scroll'/>
        </div>
    )
}