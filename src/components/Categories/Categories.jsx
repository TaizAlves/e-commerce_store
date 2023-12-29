import style from  './styles.module.scss'

export const Categories =({category}) => {
  const { imageUrl, title } = category;
    
    
      return (
    
        <div className={style.category_container}>
        <div
          className={style.background_image}
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <div className={style.category_body_container}>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
      );
}