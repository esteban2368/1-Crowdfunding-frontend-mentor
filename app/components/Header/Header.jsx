'use client'
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import useResponsive from "@/app/hooks/useResponsive";
import Modal from "../common/Modal";
import StyleHeader from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import heroDesktop from '../../../public/images/image-hero-desktop.jpg'
import heroMobile from '../../../public/images/image-hero-mobile.jpg'
import logo from '../../../public/images/logo.svg'

const Header = () => {
    const isMobile = useResponsive(376)
    const [openModal, setOpenModal] = useState(false)
    return (
        <header className={StyleHeader.header}>
            <Image
                className={`${StyleHeader.header__background} block md:hidden`}
                src={heroMobile}
                alt=""
            />
            <Image
                className={`${StyleHeader.header__background} none md:block`}
                src={heroDesktop}
                alt=""
            />
            <div className={`${StyleHeader.header__menu} py-7 xl:py-12 px-6`}>
                <div className={StyleHeader.header__menu_container}>
                    <div>
                        <Link href="#">
                            <Image
                                src={logo}
                                alt="Crowdfund logo"
                            />
                        </Link>
                    </div>
                    <nav className={`${StyleHeader.menu__desktop} hidden sm:block`}>
                        <ul className={StyleHeader.menu__desktop_list}>
                            <li><Link href="#" className={StyleHeader.menu__desktop_item}>About</Link></li>
                            <li><Link href="#" className={StyleHeader.menu__desktop_item}>Discover</Link></li>
                            <li><Link href="#" className={StyleHeader.menu__desktop_item}>Get started</Link></li>
                        </ul>
                    </nav>
                    <>
                        <button type='button' onClick={()=> setOpenModal(!openModal)} className="block sm:hidden">
                            {openModal ? 
                                <FontAwesomeIcon icon={faXmark} className='text-white text-xl'/>: 
                                <FontAwesomeIcon icon={faBars} className='text-white text-xl'/>}
                        </button> 
                    </>
                </div>
                <div className={`${StyleHeader.mask}`}></div>
            </div>
            <Modal isOpen={openModal} buttonClose={false} position={'top'}>
                <nav className={StyleHeader.menu__responsive}>
                    <ul>
                        <li className={StyleHeader.menu__item}><Link href="#" className="p-6 block">About</Link></li>
                        <li className={StyleHeader.menu__item}><Link href="#" className="p-6 block">Discover</Link></li>
                        <li className={StyleHeader.menu__item}><Link href="#" className="p-6 block">Get started</Link></li>
                    </ul>
                </nav>
            </Modal>   
        </header>
    )
}

export default Header