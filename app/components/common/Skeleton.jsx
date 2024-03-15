import style from './Skeleton.module.css'

const Skeleton = ({width, height}) => {
    const styleCustom = {
        width: width,
        height: height
    }
    return <div className={style.container} style={styleCustom} ></div>
}

export default Skeleton