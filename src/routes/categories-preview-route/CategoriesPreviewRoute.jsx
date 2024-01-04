import { useSelector } from 'react-redux';

import { CategotyPreview } from '../../components/category-preview/CategoryPreview';
import { selectCategoriesMap } from '../../store/categories/categories.selector';


export const CategoriesPreviewRoute = () => {
    const  categoriesMap = useSelector(selectCategoriesMap)

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