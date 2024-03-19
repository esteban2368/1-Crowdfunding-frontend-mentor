import { usePledgeContext } from '../contexts/PledgeProvider'
import formartCurrency from '../utils/currencyFormatter'
import Skeleton from './common/Skeleton'
import style from './Count.module.css'
const Count = ({data}) => {
    let { backers, backed, leftDays } = usePledgeContext()

    const showData = (index, number) =>{
        let value
        switch (index) {
            case 0: 
                value = backed == 0 ? number : backed
                break
            case 1:
                value = backers == 0 ? number : backers
                break
            case 2:
                value = leftDays
                break
            default:
                value = 0
                break
        }
        return value
    }
    return (
        <>
            {data.map((goal, index)=> (
                    <>
                        <div className='text-center md:text-left mb-6 md:mb-0'>
                            <span className='text-3xl font-bold'>{data.length - 1 !== index ? formartCurrency(showData(index, goal.number)): showData(index, goal.number)}</span>
                            <p className='text-center m-0 md:text-left leading-normal'>{goal.label}</p>
                        </div>
                        {data.length - 1 !== index ? 
                            <div className={`${style.hr} my-6 md:my-11 mx-auto md:mx-6 md:rotate-90`}></div>: ''
                        }
                    </> 
                )
            )}
        </>
    )
}

export default Count