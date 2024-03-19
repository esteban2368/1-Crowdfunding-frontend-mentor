'use client'
import { useState } from 'react'
import Image from 'next/image'
import imageCheck from '../../public/images/icon-check.svg'
import style from '../Home.module.css'
import Button from './common/Button'
import Modal from './common/Modal'

import formartCurrency from '../utils/currencyFormatter'
import { usePledgeContext } from '../contexts/PledgeProvider'

const CardReward = ({data, state}) =>{
    let {goals, countPledge} = usePledgeContext()
    const [openModal, setOpenModal] = useState(false)
    const handleClickCloseModal = () => setOpenModal(false)

    const {name, min_pledge, description, left} = data
    const variant = left !== 0 ? 'active' : 'inactive'
    const variantClassName = style[variant]

    const handleClick = () =>{
        countPledge(min_pledge)
        setOpenModal(!openModal)
    }

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
                    <Button variant='active' onCLick={handleClick}>Select Reward</Button>
                }
                {variant == 'inactive' &&
                    <Button variant='inactive'>Out of stock</Button>
                }
            </div>
            <Modal isOpen={openModal} getTitle={false} size='sm' title={'Thanks for your support!'} Onclose={handleClickCloseModal}>
                <div className='flex flex-col items-center'>
                    <Image
                        src={imageCheck}
                        alt='Check'
                        className={`${style.imageModal} mb-6`}
                    />
                    <span className={style.titleModal}>Thanks for your support!</span>
                    <p className='text-center'>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
                    <div className='flex justify-center'>
                        <Button onCLick={handleClickCloseModal}>Got it!</Button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
export default CardReward