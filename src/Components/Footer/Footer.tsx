import React from 'react';
import './Footer.scss';
import { Divider } from '../Divider/Divider';

export const Footer = () => {
    return(
        <section className='m-footer__background'>
            <div className='m-footer__container'>
                <div className='a-footer__text logo'>K2D</div>
                <Divider style={`a-divider__basic vertical light`}/>
                <div className='a-footer__text'>
                    <div>Biuro:</div>
                    <div>ul.Rayskiego 5/70</div>
                    <div>01-307 Warszawa</div> 
                </div>
                <Divider style={`a-divider__basic vertical light`}/>
                <div className='a-footer__text'>
                    <div>Skontaktuj się z nami!</div>
                    <div>Email: biuro@k2d.pl</div>
                </div>
            </div>
        </section>
    )
}