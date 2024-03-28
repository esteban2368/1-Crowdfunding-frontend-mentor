import style from '../Home.module.css'
import Image from 'next/image'
import imageCheck from '../../public/images/icon-check.svg'
import Button from './common/Button'
import Skeleton from './common/Skeleton'
import formartCurrency from '../utils/currencyFormatter'
import validateElement from '../utils/textElement'
import { useState } from 'react'
const CardRewardRadio = ({data}) =>{
    const [select, setSelect] = useState(null)
    const [answer, setAnswer] = useState('')
    const [error, setError] = useState(null)
    const [status, setStatus] = useState('typing')

    const handleOnchange = (e) =>{
        setSelect(e.currentTarget.value)
    }
    const handleInputPledgeOnchange = (e) =>{
        setAnswer(e.currentTarget.value)
    }
    const handleOnSubmit = (e) =>{
        e.preventDefault()
        setStatus('submitting')
        setStatus('success')
    }

    if(status === 'success') {
        return(
            <>
                <div className='flex flex-col items-center'>
                    <Image
                        src={imageCheck}
                        alt='Check'
                        className={`${style.imageModal} mb-6`}
                    />
                    <span className={style.titleModal}>Thanks for your support!</span>
                    <p className='text-center'>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
                    <div className='flex justify-center'>
                        <Button>Got it!</Button>
                    </div>
                </div>
            </>
        )
    } 
    return(
        <form className='flex flex-col gap-6' onSubmit={handleOnSubmit}>  
            {data ? (
                data.map((pledge, index) =>
                    <div key={pledge.id} className={`${style.mainCardLevel2} ${pledge.left !== 0 ? style['active']: style['inactive']}`}>
                        <div className="p-6 sm:p-8">
                            <div className="flex items-center justify-between mb-6">
                                <div className='flex items-center gap-6'>
                                    <input type="radio" id={`radio${pledge.id}`} name="reward" value={pledge.min_pledge} className={style.radio} onChange={handleOnchange} checked={select == pledge.min_pledge} disabled={pledge.left == 0}/>
                                    <label htmlFor={`radio${pledge.id}`} className='sm:flex justify-between justify-items-center sm:gap-4'>
                                        <h4 className='mb-2 sm:mb-0'>{pledge.name}</h4>
                                        <span className={style.RewardPrice}>Pledge {formartCurrency(pledge.min_pledge)} or more</span>
                                    </label>
                                </div>
                                <div className='hidden sm:flex items-center gap-2 mb-6 sm:mb-0'>
                                    <span className={`${style.numberReward} ${style.numberReward__size2}`}>{pledge.left}</span>
                                    <p className='m-0'>left</p>
                                </div>
                            </div>
                            <p className="sm:ml-12">{pledge.description}</p>
                            <div className='flex sm:hidden items-center gap-2'>
                                <span className={`${style.numberReward} ${style.numberReward__size2}`}>{pledge.left}</span>
                                <p className='m-0'>left</p>
                            </div>
                        </div>
                        {select == pledge.min_pledge &&
                            <div className={`${style.pledge} sm:flex justify-between items-center gap-4 p-6 sm:p-8`}>
                                <p className="text-center sm:m-0 shrink-0">Enter your pledge</p>
                                <div className="flex items-center gap-4">
                                    <div className={`${style.pledgeInput} py-4 px-6`}>
                                        <span>$</span>
                                        <input type='text' onChange={handleInputPledgeOnchange} disabled={status === 'submtting'}/>
                                    </div>
                                    <Button type='submit' inactive={answer.length === 0 || !validateElement(answer, '^\\d+$')}>Continue</Button>
                                </div>
                            </div>
                        }
                    </div>
                )
            ): (
                <div className='flex flex-col px-6 p-6 sm:p-8 gap-3 '>
                    <Skeleton width='100%' height='40px'/>
                    <Skeleton width='100%' height='100px'/>
                    <div className='flex'>
                    <div className='grow'></div>
                    <Skeleton width='200px' height='60px'/>  
                    </div>
                </div>
            )}
        </form>
    )
}
export default CardRewardRadio