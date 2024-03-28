import style from './Button.module.css'

const Button = ({inactive = false, type='button', onCLick, children}) =>{
    const variantClassName = inactive ? style['inactive'] : style['active']
    return (
        <button role="button" type={type} className={`${style.button} ${variantClassName} px-10 py-4`} onClick={onCLick}>
            <span>{children}</span>
        </button>
    )
}

export default Button