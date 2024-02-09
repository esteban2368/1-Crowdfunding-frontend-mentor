import Image from 'next/image'
import Button from './components/common/Button'

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
        <div className='pt-6'>
          <Button>Back this project</Button>
        </div>
      </div>
    </main>
  )
}
