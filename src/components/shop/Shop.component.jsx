import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

//import style from  './styles.module.scss'
import { CategoriesPreviewRoute } from '../../routes/categories-preview-route/CategoriesPreviewRoute';
import { Category } from '../../routes/category/Category';
import { fetchCategoriesAsync } from '../../store/categories/categories.action';


export const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesAsync());

}, []);

    return (
      
      <Routes>
        <Route index element = {<CategoriesPreviewRoute/>}/>
        <Route path=':category'  element = {<Category/>}/>

      </Routes>

          );

};

        
  
    //     <div className= {style.products_container}>
    //         {/* {categoriesMap.map((product) => (
    //       <ProductCard key={product.id} product={product} />
    //     ))} */}
    //   </div>
    // )
