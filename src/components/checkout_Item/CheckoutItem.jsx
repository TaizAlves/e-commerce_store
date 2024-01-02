import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

import style from  './styles.module.scss'

export const CheckoutItem = ({cartItem}) => {
    const {imageUrl, price, name, quantity} = cartItem;

    const {addItemToCart, removeItemFromCart, clearItemFromCart} = useContext(CartContext);

    const clearItemHandler = () => {
        clearItemFromCart(cartItem)
    }



    return (
        <div className={style.checkout_item_container}>
            <div className= {style.image_container}>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className={style.name}>{name}</span>
            <span className={style.quantity}>
                <div className={style.arrow} onClick={() => removeItemFromCart(cartItem)} > &#10094; </div>
                <span className={style.value}>{quantity}</span>
                <div className={style.arrow} onClick={() => addItemToCart(cartItem)}> &#10095;</div>
            </span>
            <span className={style.price}>{price}</span>
            <div className={style.remove_button} onClick={clearItemHandler}>
        &#10005;
      </div>
        </div>
        
    )

}