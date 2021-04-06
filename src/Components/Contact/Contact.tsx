import React, {useReducer} from 'react';
import './Contact.scss'

export const Contact : React.FC = () => {

    type State = { 
        email: string;
        name: string;
        topics: string
    }

    type NewState = {
        [name: string]: string;
    }

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        console.log('Message will be sent. Email: ' + inputValues.email + ' Imie: ' + inputValues.name + ' Temat: ' + inputValues.topics);
        e.preventDefault();
    }

    const handleInput = (event : React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInputValues({ [name]: value });
        console.log(name + ' ' + value)
    };

    const [inputValues, setInputValues] = useReducer(
        (state : State, newState : NewState) => ({ ...state, ...newState }),
        {
            email: '',
            name: '',
            topics: ''
        }
    );

    return(
        <section className='m-contact__container'>
            <div className='a-contact__title'>Skontaktuj się z nami!</div>
            <form onSubmit={handleSubmit} className='m-contact__form'>
                <label>Email
                    <input type="text" name='email' placeholder='Email' value={inputValues.email} onChange={handleInput}/>
                </label>
                <label>Imię i nazwisko
                    <input type="text" name='name' placeholder='Imię i nazwisko' value={inputValues.name} onChange={handleInput}/> 
                </label>
                <label>Temat
                    <input type="text" name='topics' placeholder='Temat' value={inputValues.topics} onChange={handleInput}/>
                </label>
                <input className='a-contact__submit' type="submit" value='Wyślij'/>
            </form>
        </section>
    )
}