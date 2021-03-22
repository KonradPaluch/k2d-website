import React from 'react';
import './ContactsBox.scss';
import K2Dlogo from '../Assets/k2d_temp.png';
import { Contacts } from '../Contacts/Contacts';

export const ContactsBox : React.FC = () => {
    return(
        <div className='contacts-container'>
            <img className='contacts-logo' src={K2Dlogo} alt='K2d logo'/>
            <div className='contacts-details'>
                <Contacts/>
            </div>
        </div>
    )
}