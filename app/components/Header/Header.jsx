'use client'
import Link from "next/link";
import Image from "next/image";
import useResponsive from "@/app/hooks/useResponsive";
import StyleHeader from './Header.module.css'

import heroDesktop from '../../../public/images/image-hero-desktop.jpg'
import heroMobile from '../../../public/images/image-hero-mobile.jpg'
import logo from '../../../public/images/logo.svg'

const Header = () => {
    const isMobile = useResponsive(375)
    return (
        <header className={`${StyleHeader.header} py-7 px-6`}>
            <Image
                className={StyleHeader.header__background}
                src={isMobile ? heroMobile : heroDesktop}
                priority
                alt=""
            />
            <div className={StyleHeader.header__menu}>
                <div>
                    <Link href="#">
                        <Image
                            src={logo}
                            alt="Crowdfund logo"
                        />
                    </Link>
                </div>
                {!isMobile && (
                    <nav>
                        <ul>
                            <li><Link href="#">About</Link></li>
                            <li><Link href="#">Discover</Link></li>
                            <li><Link href="#">Get started</Link></li>
                        </ul>
                    </nav>
                )} 
                {isMobile && (
                    <p>mobile</p>
                )}
            </div>
        </header>
    )
}

export default Header