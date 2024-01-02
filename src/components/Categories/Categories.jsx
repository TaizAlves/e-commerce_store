import { useNavigate } from 'react-router-dom';
import style from  './styles.module.scss'

export const Categories =({category}) => {
  const { imageUrl, title , route} = category;

  const navigate = useNavigate();

  const inNavigateHandler = () => navigate(route)
    
    
      return (
    
        <div className={style.category_container}>
        <div
          className={style.background_image}
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <div className={style.category_body_container} onClick={inNavigateHandler}>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
      );
}