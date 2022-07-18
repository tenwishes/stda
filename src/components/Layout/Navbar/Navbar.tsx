import React from 'react';
import {NavLink} from 'react-router-dom'
import {FaBars, FaTimes} from "react-icons/fa";
import s from './navbar.module.scss'
import {logo, icon_ee, icon_en, icon_ru} from '../../../icons/icons'

export function Navbar(){
    return (
        <header>
            <nav>
                <div className={s.logo}>
                    <NavLink to="/"><img src={logo} alt={""} /></NavLink>
                </div>
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
            </nav>
            {/*<button>*/}
            {/*    <FaTimes />*/}
            {/*</button>*/}
            {/*<button>*/}
            {/*    <FaBars />*/}
            {/*</button>*/}
        </header>
    );
}