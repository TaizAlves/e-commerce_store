import { useContext } from 'react';
import { CategoriesContext } from '../../context/categories.context';
import { CategotyPreview } from '../../components/category-preview/CategoryPreview';


export const CategoriesPreviewRoute = () => {
    const { categoriesMap }= useContext(CategoriesContext);

    return (
      < >
        {
          Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title];
            return (
              <CategotyPreview key={title} title = {title} products={products} />
            );
        })}

        </>


          );
};