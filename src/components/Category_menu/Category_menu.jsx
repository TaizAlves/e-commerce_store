import { Categories } from '../Categories/Categories';


import style from './styles.module.scss';

export const Category_menu = ({ categories }) => {


    return (
        <div className={style.directory_container}>
        {categories.map((category) => (
          <Categories key={category.id} category={category} />
        ))}
      </div>
    )
};

