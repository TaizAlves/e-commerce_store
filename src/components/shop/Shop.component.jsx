import { CategoriesPreviewRoute } from '../../routes/categories-preview-route/CategoriesPreviewRoute';
import { Routes, Route } from "react-router-dom";

//import style from  './styles.module.scss'
import { Category } from '../../routes/category/Category';


export const Shop = () => {

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
