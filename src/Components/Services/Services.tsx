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
                    <li><img src={BulletPoint} alt=' '/><span>Dedykowane rozwiązania do SAP HR</span></li>
                    <li><img src={BulletPoint} alt=' '/><span>Audyt funkcjonujących rozwiązań SAP HCM</span></li>
                    <li><img src={BulletPoint} alt=' '/><span>Optymalizacja raportów ABAP w SAP HCM</span></li>
                    <li><img src={BulletPoint} alt=' '/><span>Budowanie aplikacji i wdrażanie rozwiązań w technologii SAP FIORI, UI5</span></li>
                </ul>
                <ul className='a-services__list'>
                    <li><img src={BulletPoint} alt=' '/><span>Opracowanie rozwiązań do samoobsługi w SAP HR</span></li>
                    <li><img src={BulletPoint} alt=' '/><span>Wdrożenie rozwiązań SAP Cloud Platform</span></li>
                    <li><img src={BulletPoint} alt=' '/><span>Budżetowanie wynagrodzeń w SAP HCM</span></li>
                    <li><img src={BulletPoint} alt=' '/><span>Automatyzacja zadań w SAP HCM</span></li>
                    <li><img src={BulletPoint} alt=' '/><span>Migracja danych w SAP HCM</span></li>
                    <li><img src={BulletPoint} alt=' '/><span>Pogotowie serwisowe SAP HR</span></li>
                </ul>
            </div>
        </div>
    )
}