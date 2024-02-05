import styleModal from "./Modal.module.css"
const Modal = ({isOpen, Onclose, buttonClose = true, position = 'center' , children}) =>{
    if(!isOpen) return

    return (
        <div className={`${styleModal.modal__overlay} ${position}`}>
            <div className={styleModal.modal__content}>
                {buttonClose && <button type="button" onClick={Onclose}></button>}
                {children}
            </div>
        </div>
    )
}

export default Modal
