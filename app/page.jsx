import Image from 'next/image'
import Button from './components/common/Button'
import Bookmark from './components/Bookmark'
import Count from './components/Count'

import styleHome from './Home.module.css'
import logo from '../public/images/logo-mastercraft.svg'

export default function Home() {
  return (
    <main className={`${styleHome.main} mx-6 -mt-14 md:mx-auto z-10`}>
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
          <Button>Back this project</Button>
          <Bookmark>Bookmark</Bookmark>
        </div>
      </div>
      <div className={`${styleHome.mainCard} md:flex justify-start px-6 md:px-12 py-8`}>
        <Count>
          <p className='text-center md:text-left'>of $100,000 backed</p>
        </Count>
        <div className={`${styleHome.hr} my-6 md:my-11 mx-auto md:mx-0 md:rotate-90`}></div>
        <Count>
          <p className='text-center md:text-left'>total backers</p>
        </Count>
        <div className={`${styleHome.hr} my-6 md:my-11 mx-auto md:mx-0 md:rotate-90`}></div>
        <Count>
          <p className='text-center md:text-left'>days left</p>
        </Count>
      </div>
    </main>
  )
}
