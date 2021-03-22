import React from 'react';
import './Services.scss';

export const Services : React.FC = () => {
    return(
        <div className='services-container'>
            <h2 className='services-title'>USŁUGI SAP</h2>
            <div className='services-details'>
                <p className='services-description'>
                    K2D to nowoczesna firma założona przez grupę doświadczonych konsultantów współpracujących ze sobą od wielu lat. Specjalizujemy się we wdrażaniu i obsłudze systemów SAP HCM oraz SAP Cloud Platform. To, co nas wyróżnia w gąszczu firm konsultingowych, to ekspercka struktura zespołu. Do projektów dedykowani są tylko wyspecjalizowani konsultanci z wieloletnim doświadczeniem w danej dziedzinie. W naszym modelu działania nie tylko słuchamy klienta i realizujemy jego potrzeby. Uczestnicząc w wielu projektach, znamy aktualne trendy, nowoczesne rozwiązania i jesteśmy w stanie proponować sprawdzone narzędzia, które ułatwiają pracę i maksymalizują efekty wykorzystywania systemu SAP HR. 
                </p>
                <ul className='services-list'>
                    <li><span>Utrzymanie systemu SAP HCM</span></li>
                    <li><span>Rozwój systemu SAP HCM</span></li>
                    <li><span>Audyty HCM i optymalizacja rozwiązań ABAP</span></li>
                    <li><span>Implementacja rozwiązań w środowisku SAP Cloud Platform</span></li>
                </ul>
            </div>
        </div>
    )
}