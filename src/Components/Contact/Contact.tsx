import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import './Contact.scss'
import { ServiceID, TemplateID, UserID } from '../EmailIds';


export const Contact : React.FC = () => {

    const [email, setEmail] = useState({value : '', error: false});
    const [message, setMessage] = useState('');
    const [consent, setConsent] = useState({value : false, error: false});

    const handleEmail = (event : React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setEmail({value: value, error: false} );
    };

    const handleMessage = (event : React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = event.target;
        setMessage(value);
    };

    const handleConsent = () => { 
        setConsent({
            error: false,
            value:!consent.value
        })
    }

    const validateInputs = () => {
         // eslint-disable-next-line
         const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         if (!re.test(email.value)){
            setEmail({...email, error: true});
         } else {
             setEmail({...email, error: false});
         }
         //check consent
         if (!consent.value){
            setConsent({...consent, error: true});
         } else {
            setConsent({...consent, error: false});
         }
         return re.test(email.value) && consent.value;
    }

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const correctInputs = validateInputs();
        if(correctInputs){
            callEmailJS();
            clearFields();
        }
    }

    const clearFields = () => {
        setEmail({value: '', error: false });
        setMessage('');
    }

    const callEmailJS = async () => {
        try { 
            const response = await emailjs.send(ServiceID,TemplateID,{
                from_email: email.value,
                message: message,
                }, UserID);
            if(response.status === 200){
                alert('Wiadomość została wysłana.');
            } else{
                alert('Nie udało się wysłać wiadomości. Proszę spróbować za chwilę lub skontaktować się poprzez email.');
            }
        } catch(e){
            console.log(e);
            alert('Nie udało się wysłać wiadomości. Proszę spróbować za chwilę lub skontaktować się poprzez email.');
        }
    }

    return(
        <div id='contact' className='m-contact__container'>
            <div className='a-contact__title'>Skontaktuj się z nami!</div>
            <form onSubmit={handleSubmit} className={`m-contact__form`} >
                <div className={`a-contact__error ${(consent.error || email.error) ? 'active' : null}`}>Proszę sprawdzić niepoprawne pola</div>
                <label className={`m-contact__email ${email.error ? 'error' : ''}`}  >Email
                    <input type="text" placeholder='' value={email.value} onChange={handleEmail}/>
                </label>
                <label className='m-contact__message' ><div>Wiadomość <span>(opcjonalna)</span></div>
                    <textarea placeholder='' value={message} onChange={handleMessage}/>
                </label>
                <label className={`m-contact__consent ${consent.error ? 'error' : ''}`}>
                    <input className='a-contact__check' checked={consent.value} value='consent' onChange={handleConsent} type="checkbox"/>
                    <div className='a-contact__text'>Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z ustawą o ochronie danych osobowych w celu wysyłania zamówionej informacji handlowej.
                    Podanie danych osobowych jest dobrowolne. Zostałem poinformowany, że przysługuje mi prawo dostępu do swoich danych, możliwości ich poprawiania i żądania zaprzestania ich przetwarzania. Administratorem danych jest K2D sp. z o.o. sp.k. z siedzibą przy ul. Gen. Ludomiła Rayskiego 5/70, 01-307 Warszawa, Polska. 
                    </div>
                </label>
                <input className='a-contact__submit' type="submit" value='Wyślij'/>
            </form>
        </div>
    )
}