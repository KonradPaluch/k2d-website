import React from 'react';
import './WelcomePage.scss';
import { Header } from '../Header/Header';
import { Services } from '../Services/Services';
import { Footer } from '../Footer/Footer';
import { LandingView } from '../LandingView/LandingView';

export const WelcomePage : React.FC = () => {
    return(
        <>
            <Header/>
            <div className='content-container'>
                <LandingView/>
                <Services/>
            </div>
            <Footer/>
        </>
    )


}