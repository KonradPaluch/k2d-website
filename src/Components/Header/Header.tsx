import React from 'react';
import './Header.scss';
import k2d_logo from '../Assets/k2d_temp.png';

export const Header : React.FC = () => {
    return (
        <div className='header'>
            <div className='header-company'>
                <img className='header-logo' src={k2d_logo} alt='k2d logo'/>
                <h1 className='header-name'>K2D</h1>
            </div>
        </div>
    )
}