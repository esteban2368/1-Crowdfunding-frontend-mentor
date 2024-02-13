import style from './Count.module.css'
const Count = ({children}) => {
    return (
        <div className='text-center'>
            <span className='text-3xl font-bold'>$89,914</span>
            {children}
        </div>
    )
}

export default Count