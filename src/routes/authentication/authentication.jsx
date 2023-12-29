//import { useEffect } from "react";
import { Sign_In_Form } from "../../components/sign_in_form/Sign_In_Form";
import { Sign_Up_Form } from "../../components/sign_up_form/Sign_Up_Form";
import {  signInWithGooglePopup , createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import style from './style.module.scss';

//import { getRedirectResult } from 'firebase/auth';

export const Authentication = () => {
    // for redirect
    // useEffect(async () => {
    //    const response = await  getRedirectResult(auth)
    //    if (response) {
    //     const userDocRef = await createUserDocumentFromAuth(response.user);
    //    }
    //     console.log(response)
    // }, [])

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
       const userDocRef = await createUserDocumentFromAuth(user);
     };

    return (
        <div  className={style.authentication_container}>
            <Sign_In_Form />
            {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button>  */}
            <Sign_Up_Form />
        </div>
    )
};
