import { createContext, useEffect, useState } from "react";

//import PRODUCTS from '../shop-data.json';
import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
import { SHOP_DATA } from "../shop-data";


export const CategoriesContext = createContext({
    categoriesMap:{},
})


export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setcategoriesMap] = useState({});

    // importing the data from the json file to firebase (only once)
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA)

    // }, [])

    useEffect(() => {
        const  getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
            setcategoriesMap(categoryMap);
        }
        getCategoriesMap();
    }, []);

    const value = {categoriesMap}

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}