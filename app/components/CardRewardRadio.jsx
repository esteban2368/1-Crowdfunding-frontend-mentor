import style from '../Home.module.css'
import Button from './common/Button'
const CardRewardRadio = ({variant = 'active'}) =>{
    const variantClassName = style[variant]
    return(
        <div className={`${style.mainCardLevel2} ${variantClassName}`}>
            <form>
                <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-6">
                        <div className='flex items-center gap-6'>
                            <input type="radio" id="radio1" name="reward" value={1} className={style.radio} />
                            <label htmlFor="radio1" className='sm:flex justify-between justify-items-center sm:gap-4'>
                                <h4 className='mb-2 sm:mb-0'>Bamboo Stand</h4>
                                <span className={style.RewardPrice}>Pledge $25 or more</span>
                            </label>
                        </div>
                        <div className='hidden sm:flex items-center gap-2 mb-6 sm:mb-0'>
                            <span className={`${style.numberReward} ${style.numberReward__size2}`}>101</span>
                            <p className='m-0'>left</p>
                        </div>
                    </div>
                    <p className="sm:ml-12">You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.</p>
                    <div className='flex sm:hidden items-center gap-2'>
                        <span className={`${style.numberReward} ${style.numberReward__size2}`}>101</span>
                        <p className='m-0'>left</p>
                    </div>
                </div>
                <div className={`${style.pledge} p-6 sm:p-8`}>
                    <p className="text-center">Enter your pledge</p>
                    <div className="flex items-center gap-4">
                        <div className={`${style.pledgeInput} py-4 px-6`}>
                            <span>$</span>
                            <input type='number' value={25}/>
                        </div>
                        <Button>Continue</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default CardRewardRadio