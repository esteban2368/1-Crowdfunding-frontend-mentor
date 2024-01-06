import Link from "next/link";
import Image from "next/image";
import StyleHeader from './Header.module.css'

import heroDesktop from '../../../public/images/image-hero-desktop.jpg'
import heroMobile from '../../../public/images/image-hero-mobile.jpg'
import logo from '../../../public/images/logo.svg'

const Header = () => {
    return (
        <header>
            <div>
                <Link href="#">
                    <Image
                        src={logo}
                        alt="Crowdfund logo"
                    />
                </Link>
            </div>
            <nav>
                <ul>
                    <li><Link href="#">About</Link></li>
                    <li><Link href="#">Discover</Link></li>
                    <li><Link href="#">Get started</Link></li>
                </ul>
            </nav>  
            
        </header>
    )
}

export default Header