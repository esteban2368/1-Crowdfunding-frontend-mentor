import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import styleModal from "./Modal.module.css"

const Modal = ({
    isOpen, 
    Onclose, 
    getTitle = true, 
    title = 'Title modal',
    position = 'center',
    size = 'md',
    children
    }) =>{
    if(!isOpen) return
    const variantClassName = styleModal[size]
    return (
        <div className={`${styleModal.modal__overlay} ${position}`}>
            <div className={`${styleModal.modal__content} ${variantClassName}  px-6 py-8 sm:p-12`}>
                {getTitle && 
                    <div className="flex justify-between items-center">
                        <span className={styleModal.title}>{title}</span>
                        <button className="sm:-mt-10 sm:-mr-4" type="button" onClick={Onclose}>
                        <FontAwesomeIcon icon={faXmark} className={styleModal.buttonClose}/>
                        </button>
                    </div>}
                {children}
            </div>
        </div>
    )
}

export default Modal
