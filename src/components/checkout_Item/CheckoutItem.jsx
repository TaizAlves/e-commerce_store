import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.action';

import style from  './styles.module.scss'


export const CheckoutItem = ({cartItem}) => {
    const {imageUrl, price, name, quantity} = cartItem;

    const CartItems = useSelector(selectCartItems)
    const dispatch = useDispatch();

    const clearItemHandler = () => {
        dispatch(clearItemFromCart(CartItems, cartItem));
    }

    const removeItemHandler = () => {
        dispatch(removeItemFromCart(CartItems, cartItem));
    }
    
    const addItemHandler = () => {
        dispatch(addItemCart(CartItems, cartItem));
    }



    return (
        <div className={style.checkout_item_container}>
            <div className= {style.image_container}>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className={style.name}>{name}</span>
            <span className={style.quantity}>
                <div className={style.arrow} onClick={() => removeItemHandler(cartItem)} > &#10094; </div>
                <span className={style.value}>{quantity}</span>
                <div className={style.arrow} onClick={() => addItemHandler(cartItem)}> &#10095;</div>
            </span>
            <span className={style.price}>{price}</span>
            <div className={style.remove_button} onClick={clearItemHandler}>
        &#10005;
      </div>
        </div>
        
    )

}