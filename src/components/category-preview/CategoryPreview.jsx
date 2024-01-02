import { Link } from 'react-router-dom'
import { ProductCard } from '../product-card/Product_Card'
import style from  './styles.module.scss'


export const CategotyPreview = ({title, products}) => {
    return (
        <div className={style.category_preview_container}>
            <h2>
                <Link className={style.title} to={title} >{title.toUpperCase()}</Link>
            </h2>
            <div className={style.preview}>
                {
                    products
                    .filter((_, index) => index < 4)
                    .map((product) => (
                        <ProductCard key={product.id} product={product} />
                          
                    ))
                }

            </div>

            
        </div>
    )
}