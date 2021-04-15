import React from 'react';
import './Services.scss';
import BulletPoint from '../Assets/bullet-point.png';
//import { ReactComponent as BulletPoint } from '../Assets/bullet-point.svg';

export const Services : React.FC = () => {
    return(
        <div id="services" className='m-services__container'>
            <div className='a-services__title'>USŁUGI SAP</div>
            <div className='m-services__texts'>
                <ul className='a-services__list'>
                    <li><img src={BulletPoint} alt=' '/><span>Utrzymanie systemu SAP HCM</span></li>
                    <li><img src={BulletPoint} alt=' '/><span>Rozwój systemu SAP HCM</span></li>
                    <li><img src={BulletPoint} alt=' '/><span>Audyty HCM i optymalizacja rozwiązań ABAP</span></li>
                    <li><img src={BulletPoint} alt=' '/><span>Implementacja rozwiązań w środowisku SAP Cloud Platform</span></li>
                </ul>
                <div className='a-services__desc'>
                    K2D to nowoczesna firma założona przez grupę 
                    doświadczonych konsultantów współpracujących ze 
                    sobą od wielu lat. Specjalizujemy się we wdrażaniu i 
                    obsłudze systemów SAP HCM oraz SAP Cloud 
                    Platform. To, co nas wyróżnia w gąszczu firm 
                    konsultingowych, to ekspercka struktura zespołu. Do 
                    projektów dedykowani są tylko wyspecjalizowani 
                    konsultanci z wieloletnim doświadczeniem w danej 
                    dziedzinie. W naszym modelu działania nie tylko 
                    słuchamy klienta i realizujemy jego potrzeby. 
                    Uczestnicząc w wielu projektach, znamy aktualne 
                    trendy, nowoczesne rozwiązania i jesteśmy w stanie 
                    proponować sprawdzone narzędzia, które ułatwiają 
                    pracę i maksymalizują efekty wykorzystywania 
                    systemu SAP HR.
                </div>
            </div>
        </div>
    )
}