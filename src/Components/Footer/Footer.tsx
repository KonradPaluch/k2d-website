import React from 'react';
import './Footer.scss';
import { Contacts } from '../Contacts/Contacts';
import { Address } from '../Address/Address';
import { VerticalDivider } from '../VerticalDivider/VerticalDivider';

export const Footer : React.FC = () => {
    return(
        <footer className='footer-container'>
            <div className='footer-company'>K2D</div>
            <VerticalDivider/>
            <Address/>
            <VerticalDivider/>
            <Contacts/>
        </footer>
    )
}