import { Button } from "../button/Button";

import style from  './styles.module.scss'


export const ProductCard = ({product}) =>{
    const { name, price, imageUrl } = product;
    
    return (
    <div className={style.product_card_container}>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted'>Add to card</Button>
    </div>
  );
}