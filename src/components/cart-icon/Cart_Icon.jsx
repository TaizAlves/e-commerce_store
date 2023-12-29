
import {useContext} from 'react'
import { CartContext } from '../../context/cart.context'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import style from  './styles.module.scss'

export const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);

    const toggleCartHandler = () => {
        setIsCartOpen(!isCartOpen)
    }


    return (
        <div className= {style.cart_icon_container} onClick={toggleCartHandler}>
            <ShoppingIcon className={style.shopping_icon} />
            <span className={style.item_count}>{cartCount}</span>
        </div>


    )
}