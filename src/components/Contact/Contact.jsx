import React, { useState } from 'react';
import styleCSS from './Contact.module.css';

const Contact = React.memo(() => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Код для отправки данных формы на сервер
        // ...

        // Вывод сообщения об успешной отправке
        alert('Сообщение отправлено!');
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <section id="contact" className={styleCSS.contactUS}>
            <h2>Contact us</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
                <textarea
                    placeholder="Your message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    required
                ></textarea>
                <button type="submit">Send</button>
            </form>
        </section>
    );
});

export default Contact;