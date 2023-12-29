import style from './styles.module.scss';


export const Form_Input = ({ label, ...otherProps }) => {

    return (
        <div className={style.group}>
            <input className={style.form_input}  {...otherProps}/>
            { label && (
                <label className={`${otherProps.value.length ? 'shrink': ''} ${style.form_input_label} `} >{label}</label>
            )}
        </div>

    )
}