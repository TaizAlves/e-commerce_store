import { useContext } from 'react';

import style from  './styles.module.scss'
import { CartContext } from '../../context/cart.context';
import { CartItem } from '../cart-item/Cart_Item';
import { Button } from '../button/Button';
import { useNavigate } from 'react-router-dom';

export const CartDropDown = () => {
    const { cartItems} = useContext(CartContext)
    const navigate =  useNavigate();

    const goTockeckOut = () => {
        navigate('/checkout')
    };

        return (
            <div className= {style.cart_dropdown_container} >
                <div className= {style.cart_items}>
                    {cartItems.length ? (
                        cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item}/>
                    ))
                ): (
                    <span className={style.empty_message}>Your cart is empty</span>
                    )}
                </div>
                <Button  onClick={goTockeckOut} >CHECKOUT</Button>
            </div>
        )
}
