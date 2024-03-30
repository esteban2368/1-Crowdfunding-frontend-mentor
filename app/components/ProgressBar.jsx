import styles from '../Home.module.css'

const ProgressBar = ({max = 100, value}) => {
    let percentValue = (100 * value) / max
    return(
        <div className={`${styles.containerProgress}`}>
            <div className={styles.progressBar} style={{width:`${percentValue}%`}}></div>
        </div>
    )
}
export default ProgressBar