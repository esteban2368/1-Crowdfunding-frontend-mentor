import style from '../Home.module.css'
import Button from './common/Button'
const CardReward = ({variant = 'active'}) =>{
    const variantClassName = style[variant]
    return(
        <div className={`${style.mainCardLevel2} ${variantClassName} p-6 sm:p-8`}>
            <hgroup className='sm:flex justify-between justify-items-center mb-8'>
            <h4 className='mb-2 sm:mb-0'>Bamboo Stand</h4>
            <span className={style.RewardPrice}>Pledge $25 or more</span>
            </hgroup>
            <p>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.</p>
            <div className='sm:flex justify-between'>
                <div className='flex items-center gap-2 mb-6 sm:mb-0'>
                    <span className={style.numberReward}>101</span>
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