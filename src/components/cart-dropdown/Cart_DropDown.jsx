import { useState } from 'react';
import style from  './styles.module.scss'

export const CartDropDown = () => {
    
        return (
            <div className= {style.cart_dropdown_container} >
                <div className= {style.cart_items}>
                    <span className={style.empty_message}>Your cart is empty</span>
                </div>
                <button className={style.checkout_button}>GO TO CHECKOUT</button>
            </div>
        )
}
