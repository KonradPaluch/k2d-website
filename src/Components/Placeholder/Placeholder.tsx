import React from 'react';
import './Placeholder.scss';
import { Contacts } from '../Contacts/Contacts';
import { Header } from '../Header/Header';

export const Placeholder : React.FC = () => {
    return(
        <div className='placeholder-container'>
            <div className='placeholder-content'>
                <Contacts/>
            </div>
        </div>
    )
}