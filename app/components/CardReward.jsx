'use client'
import formartCurrency from '../utils/currencyFormatter'
import style from '../Home.module.css'
import Button from './common/Button'
const CardReward = ({data}) =>{
    const {name, min_pledge, description, left} = data
    const variant = left !== 0 ? 'active' : 'inactive'
    const variantClassName = style[variant]

    const USformatPledge = formartCurrency(min_pledge)
    return(
        <div className={`${style.mainCardLevel2} ${variantClassName} p-6 sm:p-8`}>
            <hgroup className='sm:flex justify-between justify-items-center mb-8'>
            <h4 className='mb-2 sm:mb-0'>{name}</h4>
            <span className={style.RewardPrice}>Pledge {USformatPledge} or more</span>
            </hgroup>
            <p>{description}</p>
            <div className='sm:flex justify-between'>
                <div className='flex items-center gap-2 mb-6 sm:mb-0'>
                    <span className={style.numberReward}>{left}</span>
                    <p className='m-0'>left</p>
                </div>
                {variant == 'active' && 
                    <Button variant='active'>Select Reward</Button>
                }
                {variant == 'inactive' &&
                    <Button variant='inactive'>Out of stock</Button>
                }
            </div>
        </div>
    )
}
export default CardReward