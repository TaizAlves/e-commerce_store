import style from  './styles.module.scss'


export const CartItem = ({cartItem}) => {
    const { imageUrl, price, name, quantity } = cartItem;

    return (
      <div className={style.cart_item_container}>
        <img src={imageUrl} alt={`${name}`} />
        <div className={style.item_details}>
          <span className={style.name}>{name}</span>
          <span className={style.price}>
            {quantity} x ${price}
          </span>
        </div>
      </div>
    );
  };
