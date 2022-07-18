import React from 'react';
import {Navbar} from "./Navbar/Navbar";
import {Outlet} from "react-router-dom";
import {Footer} from "./Footer/Footer";
import s from './layout.module.scss'

export function Layout() {
    return (
        <>
            <Navbar />
            <div className={s.container}>
                <Outlet />
            </div>
            <Footer name={"STDA group OÜ"} regCode={"21532346"} email={"stdagroup4@gmail.com"} number={"+3254343663"} currentYear={"2022"} />
        </>
    );
}