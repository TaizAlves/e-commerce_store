import { useDispatch, useSelector } from 'react-redux'

import { selectCartItemsCount, selectIsCartOpen } from '../../store/cart/cart.selector'
import { setIsCartOpen } from '../../store/cart/cart.action'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import style from  './styles.module.scss'


export const CartIcon = () => {
    const isCartOpen = useSelector(selectIsCartOpen)
    const cartCount = useSelector(selectCartItemsCount)
    const dispatch = useDispatch();


    const toggleCartHandler = () => {
        dispatch(setIsCartOpen(!isCartOpen))
    }


    return (
        <div className= {style.cart_icon_container} onClick={toggleCartHandler}>
            <ShoppingIcon className={style.shopping_icon} />
            <span className={style.item_count}>{cartCount}</span>
        </div>


    )
}