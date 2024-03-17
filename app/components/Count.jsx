import { usePledgeContext } from '../contexts/PledgeProvider'
import formartCurrency from '../utils/currencyFormatter'
import Skeleton from './common/Skeleton'
import style from './Count.module.css'
const Count = () => {
    let { goals, setGoal } = usePledgeContext()
    return (
        <>
            {goals ? (
                goals.map((goal, index)=> (
                    <>
                        <div className='text-center md:text-left mb-6 md:mb-0'>
                            <span className='text-3xl font-bold'>{goals.length - 1 !== index ? formartCurrency(goal.number): goal.number}</span>
                            <p className='text-center m-0 md:text-left leading-normal'>{goal.label}</p>
                        </div>
                        {goals.length - 1 !== index ? 
                            <div className={`${style.hr} my-6 md:my-11 mx-auto md:mx-6 md:rotate-90`}></div>: ''
                        }
                    </> 
                ))
            ):(
                <div className='flex flex-col px-6 p-6 sm:p-8 gap-3 '>
                    <Skeleton width='100%' height='40px'/>
                    <Skeleton width='100%' height='100px'/>
                    <div className='flex'>
                    <div className='grow'></div>
                    <Skeleton width='200px' height='60px'/>  
                    </div>
                </div>
            )}
        </>
    )
}

export default Count