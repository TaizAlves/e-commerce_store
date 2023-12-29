import { useContext } from "react";
import { ProductContext } from "../../context/products.context";
import { ProductCard } from "../product-card/Product_Card";

import style from  './styles.module.scss'


export const Shop = () => {
    const {products }= useContext(ProductContext);

    return (
        <div className= {style.products_container}>
            {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    )
};