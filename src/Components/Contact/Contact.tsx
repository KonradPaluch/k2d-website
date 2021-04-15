import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import './Contact.scss'

export const Contact : React.FC = () => {

    const [email, setEmail] = useState({value : '', error: false});
    const [message, setMessage] = useState('');
    const [consent, setConsent] = useState({value : false, error: true});

    const handleEmail = (event : React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setEmail({value: value, error: false} );
    };

    const handleMessage = (event : React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = event.target;
        setMessage(value);
    };

    const handleConsent = (event : React.ChangeEvent<HTMLInputElement>) => { 
        setConsent({
            ...consent,
            value:!consent.value
        })
    }

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        callEmailJS();
    }

    const callEmailJS = async () => {
        try {
            const response = await emailjs.send("service_uqrxhlv","template_2075oub",{
                from_email: email,
                message: message,
                }, 'user_SjZuu66WONFyu20g6DW4B');
            if(response.status === 200){
                alert('Wiadomość została wysłana.');
            } else{
                alert('Nie udało się wysłać wiadomości. Proszę spróbować za chwilę lub skontaktować się poprzez email.');
            }
        } catch(e){
            console.log(e);
        }
    }

    return(
        <div id='contact' className='m-contact__container'>
            <div className='a-contact__title'>Skontaktuj się z nami!</div>
            <form onSubmit={handleSubmit} className={`m-contact__form ${email.error ? 'error' : ''}`} >
                <label>Email
                    <input type="text" placeholder='' value={email.value} onChange={handleEmail}/>
                </label>
                <label><div>Wiadomość <span>(opcjonalna)</span></div>
                    <textarea placeholder='' value={message} onChange={handleMessage}/>
                </label>
                <label className='m-contact__consent'>
                    <input className='a-contact__check' checked={consent.value} value='consent' onChange={handleConsent} type="checkbox"/>
                    <div className='a-contact__text'>Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z ustawą o ochronie danych osobowych w celu wysyłania zamówionej informacji handlowej.
                    Podanie danych osobowych jest dobrowolne. Zostałem poinformowany, że przysługuje mi prawo dostępu do swoich danych, możliwości ich poprawiania, żądania zaprzestania ich przetwarzania. Administratorem danych jest K2D sp. z o.o. sp.k. z siedzibą przy ul. Gen. Ludomiła Rayskiego 5 /70, 01-307 Warszawa, Polska. 
                    </div>
                </label>
                <input className='a-contact__submit' type="submit" value='Wyślij'/>
                

            </form>
        </div>
    )
}