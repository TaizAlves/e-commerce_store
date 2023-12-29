import { useContext } from "react";
import { Button } from "../button/Button";

import style from  './styles.module.scss'
import { CartContext } from "../../context/cart.context";


export const ProductCard = ({product}) =>{
  const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext)

    const addProductToCart = () => addItemToCart(product)
    
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