import React from 'react';
import './Placeholder.scss';
import { ContactsBox } from '../ContactsBox/ContactsBox';
import { Header } from '../Header/Header';

export const Placeholder : React.FC = () => {
    return(
        <div className='placeholder-container'>
            <div className='placeholder-content'>
                <ContactsBox/>
            </div>
        </div>
    )
}