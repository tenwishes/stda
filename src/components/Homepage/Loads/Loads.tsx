import React from 'react';
import s from "../Service/service.module.scss";
import {icon_standart, icon_dangerous, icon_oversized, icon_groupage, icon_special} from '../../../icons/icons'

export function Loads() {
    const areas = [
        {
            title: "Standart",
            image: icon_standart,
            alt: "Standart"
        },
        {
            title: "Groupage",
            image: icon_groupage,
            alt: "Groupage"
        },
        {
            title: "Oversized",
            image: icon_oversized,
            alt: "Oversized"
        },
        {
            title: "Dangerous",
            image: icon_dangerous,
            alt: "Dangerous"
        },
        {
            title: "Special conditions",
            image: icon_special,
            alt: "Special conditions"
        },
    ]
    return (
        <div className={s.container}>
            <div className={s.header}>
                <span className={s.text}>LOADS</span>
                <span className={s.underText}>wide range of cargo types</span>
            </div>
            <div className={s.areas}>
                {areas.map((a: any) => {
                    return (
                        <div className={s.area}>
                            <div className={s.icon}>
                                <img src={a.image} alt={a.alt}/>
                            </div>
                            <span>{a.title}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}