import style from '../Home.module.css'
import Button from './common/Button'
const CardReward = () =>{
    return(
        <div className={`${style.mainCardLevel2} p-6 sm:p-8`}>
            <hgroup className='mb-8'>
            <h4 className='mb-2'>Bamboo Stand</h4>
            <span className={style.RewardPrice}>Pledge $25 or more</span>
            </hgroup>
            <p>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.</p>
            <div className='flex items-center gap-2 mb-8'>
                <span className={style.numberReward}>101</span>
                <p className='m-0'>left</p>
            </div>
            <Button>Select Reward</Button>
        </div>
    )
}
export default CardReward