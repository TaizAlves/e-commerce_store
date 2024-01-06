import '../../components/button/button.styles.scss';

export const BUTTON_TYPE_CLASSES = {
    google: 'google_sign_in',
    inverted: 'inverted',
}

export const Button = ({children, button_type, isLoading, ...otherProps}) =>  {
    return (
        <button disabled={isLoading} className={`button_container ${BUTTON_TYPE_CLASSES[button_type]}`}
         {...otherProps}>
            {isLoading ? <div></div> : children}
        </button>
    )
}