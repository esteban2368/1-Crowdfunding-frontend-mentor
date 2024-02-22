import style from './Button.module.css'

const Button = ({variant = "active", onCLick, children}) =>{
    const variantClassName = style[variant]
    return (
        <button role="button" className={`${style.button} ${variantClassName}  px-10 py-4`} onClick={onCLick}>
            <span>{children}</span>
        </button>
    )
}

export default Button