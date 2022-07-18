import React from 'react';
import s from './footer.module.scss'

type FooterPropsType = {
    name: string
    regCode: string
    email: string
    number: string
    currentYear: string
}

export function Footer({name, regCode, email, number, currentYear}: FooterPropsType) {
    return (
        <footer className={s.footer}>
            <span>{name}</span>
            <span>{regCode}</span>
            {/*<span>{email}</span>*/}
            {/*<span>{number}</span>*/}
            <span>® 2022-{currentYear} «{name}»</span>
        </footer>
    )
}