import Image from 'next/image'
import Button from './components/common/Button'
import Bookmark from './components/Bookmark'
import Count from './components/Count'
import ProgressBar from './components/ProgressBar'

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
      <div className={`${styleHome.mainCard} px-6 md:px-12 py-8`}>
        <h3>About this project</h3>
        <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
        <p>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
      </div>
    </main>
  )
}
