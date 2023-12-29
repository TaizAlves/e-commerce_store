
import {useContext} from 'react'
import style from  './styles.module.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { CartContext } from '../../context/cart.context'


export const CartIcon = () => {
    const {isCartOpen, setIsCartOpen} = useContext(CartContext);
    const toggleCartHandler = () => {
        setIsCartOpen(!isCartOpen)
    }


    return (
        <div className= {style.cart_icon_container} onClick={toggleCartHandler}>
            <ShoppingIcon className={style.shopping_icon} />
            <span className={style.item_count}>0</span>
        </div>


    )
}