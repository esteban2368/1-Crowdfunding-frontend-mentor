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
    const isMobile = useResponsive(375)
    const [openModal, setOpenModal] = useState(false)
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
                    <>
                        <button type='button' className="z-30" onClick={()=> setOpenModal(!openModal)}>
                            {openModal ? 
                                <FontAwesomeIcon icon={faXmark} className='text-white'/>: 
                                <FontAwesomeIcon icon={faBars} className='text-white'/>}
                        </button> 
                    </>
                )}
            </div>
            <Modal isOpen={openModal} buttonClose={false}>
                <p>Estoy dentro del modal</p>
            </Modal>   
        </header>
    )
}

export default Header