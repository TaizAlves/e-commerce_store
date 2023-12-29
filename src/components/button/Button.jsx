import '../../components/button/button.styles.scss';

const BUTTON_TYPE_CLASSES = {
    google: 'google_sign_in',
    inverted: 'inverted',
}

export const Button = ({children, button_type, ...otherProps}) =>  {
    return (
        <button className={`button_container ${BUTTON_TYPE_CLASSES[button_type]}`}
         {...otherProps}>
            {children}
        </button>
    )
}