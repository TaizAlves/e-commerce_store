import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { CheckoutItem } from "../../components/checkout_Item/CheckoutItem";

import style from  './styles.module.scss'


export const CheckOut = () => {
    const { cartItems , cartTotal} = useContext(CartContext)

    return (
        <div className= {style.checkout_container}>
      <div className={style.checkout_header}>
        <div className={style.header_block}>
          <span>Product</span>
        </div>
        <div className={style.header_block}>
          <span>Description</span>
        </div>
        <div className={style.header_block}>
          <span>Quantity</span>
        </div>
        <div className={style.header_block}>
          <span>Price</span>
        </div>
        <div className={style.header_block}>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className={style.total}>TOTAL: ${cartTotal}</div>
    </div>
  );
};



