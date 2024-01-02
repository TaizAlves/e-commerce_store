import { useParams } from 'react-router-dom'

import style from  './styles.module.scss'
import {  useContext, useEffect, useState } from 'react';
import { CategoriesContext } from '../../context/categories.context';
import { ProductCard } from '../../components/product-card/Product_Card';
import { Fragment } from 'react';


export const Category= () => {
    const { category} = useParams();

    const { categoriesMap } = useContext(CategoriesContext)

    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect( () => {
        setProducts(categoriesMap[category]);
    
    }, [category, categoriesMap])


    return (
        <Fragment>
            <h2 className={style.title}>{category.toUpperCase()}</h2>
            <div className={style.category_container}>
                {
                    products &&
                    products.map((product) => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </Fragment>
    )
};