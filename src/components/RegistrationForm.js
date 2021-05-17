import React, { useState } from 'react';
import FormControl from './FormControl';
import './RegistrationForm.css';

const RegistrationForm = () => {
    const [formControl, setFormControl] = useState({
        username: ['', ''],
        email: ['', ''],
        password: ['', ''],
        confirmPassword: ['', '']
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const { username, email, password, confirmPassword } = formControl;
        if (username[0].length < 3) {
            const newForm = { ...formControl };
            newForm.username[1] = 'Username must be at least 3 characters';
            setFormControl(newForm);
        } else {
            const newForm = { ...formControl };
            newForm.username[1] = 'OK';
            setFormControl(newForm);
        }
        if (!email[0].match(/^[^\s@]+@[^\s@]+$/)) {
            const newForm = { ...formControl };
            newForm.email[1] = 'Email is not valid';
            setFormControl(newForm);
        } else {
            const newForm = { ...formControl };
            newForm.email[1] = 'OK';
            setFormControl(newForm);
        }
        if (password[0].length < 6) {
            const newForm = { ...formControl };
            newForm.password[1] = 'Password must be at least 6 characters';
            setFormControl(newForm);
        } else {
            const newForm = { ...formControl };
            newForm.password[1] = 'OK';
            setFormControl(newForm);
        }
        if (confirmPassword[0] === '') {
            const newForm = { ...formControl };
            newForm.confirmPassword[1] = 'Please retype password to confirm';
            setFormControl(newForm);
        } else if (confirmPassword[0] !== password[0]) {
            const newForm = { ...formControl };
            newForm.confirmPassword[1] = 'Passwords do not match';
            setFormControl(newForm);
        } else {
            const newForm = { ...formControl };
            newForm.confirmPassword[1] = 'OK';
            setFormControl(newForm);
        }

        console.log(formControl);
    };

    return (
        <form id="form" className="form">
            <h2>Register With Us</h2>
            <FormControl
                setFormControl={setFormControl}
                formControl={formControl}
                fieldName="username"
            />
            <FormControl
                setFormControl={setFormControl}
                formControl={formControl}
                fieldName="email"
            />
            <FormControl
                setFormControl={setFormControl}
                formControl={formControl}
                fieldName="password"
            />
            <FormControl
                setFormControl={setFormControl}
                formControl={formControl}
                fieldName="confirmPassword"
            />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    );
};

export default RegistrationForm;
