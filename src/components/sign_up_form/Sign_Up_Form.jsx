import { useContext, useState } from 'react';
import style from './styles.module.scss';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import { Form_Input } from '../form-input/Form_input';
import { Button } from '../button/Button';


const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

export const Sign_Up_Form = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;


    

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }else if (password.length < 6) {
            alert("Password must be at least 6 characters");
            return;
        }

        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);

            await createUserDocumentFromAuth(user, {displayName});
            resetFormField();
            console.log(user)
        } catch (error) {   
            if (error.code === 'auth/email-already-in-use') {
                alert('Email already in use');
            }else {
                console.log( error);
            }
        }
        
    }
    const resetFormField = () => {
        setFormFields(defaultFormFields);
    }


    return (
        <div className={style.sign_up_container}>
            <h2>Sign Up With email and password</h2>
            <form onSubmit={handleSubmit}>
                <Form_Input label="Display Name" type="text" name="displayName" value={displayName} id="" required  onChange={handleChange}/>

                <Form_Input label="Email" type="email" name="email" id="" value={email}required onChange={handleChange}/>

                <Form_Input label="Password" type="password" name="password" id="" value={password} required onChange={handleChange}/>

                <Form_Input label="Confirm Password" type="password" name="confirmPassword" value={confirmPassword} id="" required onChange={handleChange}/>
                
                <Button button_type='google' type="submit">Sign Up</Button>

            </form>
        </div>
    )
};
