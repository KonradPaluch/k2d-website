import React, {useState} from 'react';
import './Contact.scss'

export const Contact : React.FC = () => {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleEmail = (event : React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setEmail(value);
    };

    const handleMessage = (event : React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = event.target;
        setMessage(value);
    };

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        callBackendAPI()
            .then(res => console.log(res))
            .catch(err => console.log(err));
        e.preventDefault();
    }

    const callBackendAPI = async () => {
        console.log('backend call');
        const data : {email : string, message : string} = {
            email: email,
            message: message
        }
        
        const response = await fetch('http://localhost:5000/send_email',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify(data)
        }
        );

        const body = await response.json();
        if (response.status !== 200) {
        throw Error(body.message) 
        }
        return body;
    };

    return(
        <section className='m-contact__container'>
            <div className='a-contact__title'>Skontaktuj się z nami!</div>
            <form onSubmit={handleSubmit} className='m-contact__form'>
                <label>Email
                    <input type="text" placeholder='' value={email} onChange={handleEmail}/>
                </label>
                <label><div>Wiadomość <span>(opcjonalna)</span></div>
                    <textarea placeholder='' value={message} onChange={handleMessage}/>
                </label>
                <input className='a-contact__submit' type="submit" value='Wyślij'/>
            </form>
        </section>
    )
}