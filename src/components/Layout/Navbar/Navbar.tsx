import React, {useRef} from 'react';
import {NavLink} from 'react-router-dom'
import {FaBars, FaTimes} from "react-icons/fa";
import s from './nav.module.scss'
import {logo, icon_ee, icon_en, icon_ru} from '../../../icons/icons'

export function Navbar() {
    const navRef = useRef<HTMLElement>(null)
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions

    const showNavbar = () => {
        navRef.current?.classList.toggle(s.responsive)
        console.log(navRef.current)
    }



    return (
        <header className={s.container}>
            <div className={s.logo}>
                <NavLink to="/"><img src={logo} alt={""}/></NavLink>
            </div>
            <nav ref={navRef} className={s.nav}>
                <div className={s.links}>
                    <NavLink to="/">HOME</NavLink>
                    <NavLink to="/service">SERVICES</NavLink>
                    <NavLink to="/contact">CONTACT</NavLink>
                    <NavLink to="/about">ABOUT</NavLink>
                </div>
                <div className={s.languages}>
                    <NavLink to="/"><img src={icon_en} alt={"English"}/></NavLink>
                    <NavLink to="/ee/"><img src={icon_ee} alt={"Eesti"}/></NavLink>
                    <NavLink to="/ru/"><img src={icon_ru} alt={"Русский"}/></NavLink>
                </div>
                <button className={s.navBtn + " " + s.close} onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className={s.navBtn + " " + s.open} onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}