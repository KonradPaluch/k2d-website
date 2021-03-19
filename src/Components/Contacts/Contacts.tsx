import React from 'react';
import './Contacts.scss';
import K2Dlogo from '../Assets/k2d_temp.png';

export const Contacts : React.FC = () => {
    return(
        <div className='contacts-container'>
            <img className='logo' src={K2Dlogo} alt='K2d logo'/>
            <div className='contacts'>
                <div>K2D Sp. z o.o. Sp. k.</div>
                <div>ul. Rayskiego 5/70</div>
                <div>01-307 Warszawa</div>
                <div>email: biuro@k2d.pl</div>
            </div>
            
        </div>
    )
}