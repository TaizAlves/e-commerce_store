import { useSelector } from 'react-redux';
import {   useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

import { Fragment } from 'react';
import { ProductCard } from '../../components/product-card/Product_Card';
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/categories.selector';

import style from  './styles.module.scss'
import { Spinner } from '../../components/spinner/spinner';

export const Category= () => {
    const { category} = useParams();

    const  categoriesMap = useSelector(selectCategoriesMap)
    const isLoading =useSelector(selectCategoriesIsLoading)

    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect( () => {
        setProducts(categoriesMap[category]);
    
    }, [category, categoriesMap])


    return (
        <Fragment>
            <h2 className={style.title}>{category.toUpperCase()}</h2>
            { isLoading ?  (
               <Spinner /> 
            ) : (
            <div className={style.category_container}>
                {
                    products &&
                    products.map((product) => <ProductCard key={product.id} product={product} />)
                }
            </div>
            )
            }
        </Fragment>
    )
};