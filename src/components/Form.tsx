import React, { useState } from 'react';
import './Form.css';
import Animate from "./Animate";

function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [company, setCompany] = useState('');
    const [message, setMessage] = useState('');

    const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(event.target.value);
    };

    const handleCompanyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCompany(event.target.value);
    };

    const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    };


    return (
        <Animate>
            <form
                name="contact"
                method="post"
                action='/contact'
            >
                <input hidden type='hideen' name='form-name' value={"contact"}></input>
                <div>
                    <h2>CONTACT US</h2>
                </div>
                <label>
                    <input name='first name'
                        type="text"
                        value={firstName}
                        onChange={handleFirstNameChange}
                        placeholder=""
                        required
                    />
                    <h5>First Name:</h5>
                </label>
                <label>
                    <input name='last name'
                        type="text"
                        value={lastName}
                        onChange={handleLastNameChange}
                        placeholder=""
                    />
                    <h5>Last Name:</h5>
                </label>
                <label>
                    <input name='email'
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder=""
                    />
                    <h5>Email:</h5>
                </label>
                <label>
                    <input name='phone number'
                        type="tel"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        placeholder=""
                    />
                    <h5>Phone Number:</h5>
                </label>
                <label>
                    <input name='company'
                        type="text"
                        value={company}
                        onChange={handleCompanyChange}
                        placeholder=""
                    />
                    <h5>Company:</h5>
                </label>
                <label>
                    <textarea name='message'
                        value={message}
                        onChange={handleMessageChange}
                        placeholder=""
                        rows={4}
                    />
                    <h5>Message:</h5>
                </label>
                <button type='submit' name='submit' id='submit'>Send</button>
            </form>
        </Animate>
    );
}

export default Form;
