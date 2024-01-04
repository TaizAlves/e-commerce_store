import { useSelector } from 'react-redux';

import { CategotyPreview } from '../../components/category-preview/CategoryPreview';
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/categories.selector';
import { Spinner } from '../../components/spinner/spinner';


export const CategoriesPreviewRoute = () => {
    const  categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectCategoriesIsLoading)

    return (
      < >
        {
          isLoading ?  (
            <Spinner /> 
         ) :
         ( Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title];
            return (
              <CategotyPreview key={title} title = {title} products={products} />
            );
        }))
        }

        </>


          );
};