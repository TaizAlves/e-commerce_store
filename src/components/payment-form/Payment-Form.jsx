import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { BUTTON_TYPE_CLASSES, Button } from "../button/Button";
import { FormContainer, PaymentFormContainer } from "./payment-form.styles";
import { useSelector } from "react-redux";
import { selectCartItemsTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useState } from "react";

export const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(selectCartItemsTotal)
    const currentUser = useSelector(selectCurrentUser) 
    const [isProcessing, setProcessingTo] = useState(false);    

    const paymentHandler = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setProcessingTo(true);

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ amount: amount * 100 }),
        }).then((res) => res.json());

       
        const clientSecret = response.paymentIntent.client_secret;
        
        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : "Guest",
                },
            },
        });

        setProcessingTo(false);

        if (paymentResult.error) {
            alert(paymentResult.error.message);
        } else {
            if (paymentResult.paymentIntent.status === "succeeded") {
                alert("Payment Success");
            }
        }
    };

    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment: </h2>
                <CardElement/>
                <Button isLoading={isProcessing} button_type= {BUTTON_TYPE_CLASSES['inverted']}>Pay</Button>
            </FormContainer>
        </PaymentFormContainer>
    );
};
