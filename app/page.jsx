'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Modal from './components/common/Modal'
import Button from './components/common/Button'
import Bookmark from './components/Bookmark'
import Count from './components/Count'
import ProgressBar from './components/ProgressBar'
import CardReward from './components/CardReward'
import CardRewardRadio from './components/CardRewardRadio'
import Skeleton from './components/common/Skeleton'

import styleHome from './Home.module.css'
import logo from '../public/images/logo-mastercraft.svg'

import {getData} from './utils/api'

export default function Home() {
  const [openModal, setOpenModal] = useState(false)
  const [dataPledges, setDataPledges] = useState(null)

  const handleClickButtonModal = () => setOpenModal(!openModal)
  const handleClickCloseModal = () => setOpenModal(false)

  useEffect(()=>{
    const body = document.body
    if(openModal){
      body.classList.add("overflow-hidden") 
    }else{
      body.classList.remove("overflow-hidden")
    }
    return () =>{
      body.classList.remove("overflow-hidden")
    }
  },[openModal])

  useEffect(()=>{
    const result = async () =>{
      const pledges = await getData('pledge')
      console.log(pledges)
      setDataPledges(pledges)
    }
    result()
  },[])
  
  return (
    <main className={`${styleHome.main} mx-6 -mt-14 md:mx-auto z-40 sm:z-[60]`}>
      <div className={`${styleHome.mainCard} relative px-6 md:px-12 pb-10 md:pb-12 pt-14`}>
        <Image
          src={logo}
          width={56}
          height={56}
          className={styleHome.logo}
        />
        <h2>Mastercraft Bamboo Monitor Riser</h2>
        <p className='text-center'>A beautifully handcrafted monitor stand to reduce neck and eye strain.</p>
        <div className='flex items-center justify-between gap-2 pt-6'>
          <Button onCLick={handleClickButtonModal}>Back this project</Button>
          <Bookmark>Bookmark</Bookmark>
        </div>
      </div>
      <div className={`${styleHome.mainCard} px-6 md:px-12 py-8`}>
        <div className='md:flex justify-start'>
          <Count>
          <p className='text-center md:text-left leading-normal'>of $100,000 backed</p>
          </Count>
          <div className={`${styleHome.hr} my-6 md:my-11 mx-auto md:mx-6 md:rotate-90`}></div>
          <Count>
            <p className='text-center md:text-left leading-normal'>total backers</p>
          </Count>
          <div className={`${styleHome.hr} my-6 md:my-11 mx-auto md:mx-6 md:rotate-90`}></div>
          <Count>
            <p className='text-center md:text-left leading-normal mb-8'>days left</p>
          </Count>
        </div>
        <ProgressBar max={100} value={50}/>
      </div>
      <section className={`${styleHome.mainCard} px-6 md:px-12 py-8`}>
        <h3>About this project</h3>
        <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
        <p>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
        <article className="flex flex-col gap-6">
          {dataPledges ? (
              dataPledges.map((pledge, index)=> 
                <CardReward data={pledge}/>
              )
            ):(
              <div className='flex flex-col px-6 p-6 sm:p-8 gap-3 '>
                <Skeleton width='100%' height='40px'/>
                <Skeleton width='100%' height='100px'/>
                <div className='flex'>
                  <div className='grow'></div>
                  <Skeleton width='200px' height='60px'/>  
                </div>
              </div>
            )
          }
        </article>
      </section>
      <Modal isOpen={openModal} title={'Back this proyect'} Onclose={handleClickCloseModal}>
          <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world? </p>
          <div className={`${styleHome.containerCardReward} flex flex-col gap-6`}>
            <CardRewardRadio/>
            <CardRewardRadio/>
          </div>
      </Modal>
    </main>
  )
}
