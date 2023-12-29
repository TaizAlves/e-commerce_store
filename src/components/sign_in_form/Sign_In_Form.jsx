import { useContext, useState } from 'react';
import style from './styles.module.scss';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth,
     signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import { Form_Input } from '../form-input/Form_input';
import { Button } from '../button/Button';

const defaultFormFields = {
    email: '',
    password: '',
}

export const Sign_In_Form = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password} = formFields;


    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
     
        try {
            const {user }= await signInAuthUserWithEmailAndPassword(email, password);

            console.log(user)
            resetFormField();
        } catch (error) {   
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Incorrect passord or email');
                    break;
                case 'auth/user-not-found':
                    alert('User not found');
                    break;
                default:
                    console.log(error);
            }
        } 
    }
    const resetFormField = () => {
        setFormFields(defaultFormFields);
    }
    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
        
     };


    return (
        <div className={style.sign_in_container}>
            
            <h2>Already have an account ? </h2>

            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>

                <Form_Input label="Email" type="email" name="email" id="" value={email}required onChange={handleChange}/>

                <Form_Input label="Password" type="password" name="password" id="" value={password} required onChange={handleChange}/>

                <div className={style.buttons_container}>
                    <Button  type="submit">Sign In</Button>
                    <Button type="button" button_type='google' onClick={signInWithGoogle}>Google sign in</Button>

                </div>


            </form>
        </div>
    )
};
