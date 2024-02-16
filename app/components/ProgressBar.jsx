import styles from '../Home.module.css'

const ProgressBar = ({max = 100, value}) => {
    return(
        <div className={`${styles.containerProgress}`}>
            <div className={styles.progressBar}></div>
        </div>
    )
}
export default ProgressBar