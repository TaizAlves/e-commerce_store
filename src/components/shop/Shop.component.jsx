import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

//import style from  './styles.module.scss'
import { CategoriesPreviewRoute } from '../../routes/categories-preview-route/CategoriesPreviewRoute';
import { Category } from '../../routes/category/Category';
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategories } from '../../store/categories/categories.action';


export const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const  getCategoriesMap = async () => {
        const categoriesArray = await getCategoriesAndDocuments('categories');
        console.log(categoriesArray);
        dispatch(setCategories(categoriesArray));
    }
    getCategoriesMap();
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
