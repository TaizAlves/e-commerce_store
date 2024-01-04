import { useDispatch, useSelector } from "react-redux";
import { Button } from "../button/Button";

import style from  './styles.module.scss'
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemCart } from "../../store/cart/cart.action";


export const ProductCard = ({product}) =>{
  const { name, price, imageUrl } = product;
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch();

    const addProductToCart = () => dispatch(addItemCart(cartItems, product ))
    
    
    return (
    <div className={style.product_card_container}>
      <img src={imageUrl} alt={`${name}`} />
      <div className={style.footer}>
        <span className={style.name}>{name}</span>
        <span className={style.price}>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={addProductToCart}>Add to card</Button>
    </div>
  );
}