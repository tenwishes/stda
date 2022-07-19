import React, {useRef} from 'react';
import {NavLink} from 'react-router-dom'
import {FaBars, FaTimes} from "react-icons/fa";
import s from './nav.module.scss'
import {logo, icon_ee, icon_en, icon_ru} from '../../../icons/icons'

export function Navbar() {
    const navRef = useRef<HTMLElement>(null)
    const showNavbar = () => {
        navRef.current?.classList.toggle(s.responsive)
        console.log(navRef.current)
    }
    const close = () => {
        navRef.current?.classList.remove(s.responsive);
    }

    return (
        <header className={s.container}>
            <div className={s.logo}>
                <NavLink to="/"><img src={logo} alt={""}/></NavLink>
            </div>
            <nav ref={navRef} className={s.nav}>
                <div className={s.links}>
                    <NavLink onClick={close} to="/">HOME</NavLink>
                    <NavLink  onClick={close} to="/service">SERVICES</NavLink>
                    <NavLink onClick={close} to="/contact">CONTACT</NavLink>
                    <NavLink onClick={close} to="/about">ABOUT</NavLink>
                </div>
                <div className={s.languages}>
                    <NavLink onClick={close} to="/"><img src={icon_en} alt={"English"}/></NavLink>
                    <NavLink onClick={close} to="/ee/"><img src={icon_ee} alt={"Eesti"}/></NavLink>
                    <NavLink onClick={close} to="/ru/"><img src={icon_ru} alt={"Русский"}/></NavLink>
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