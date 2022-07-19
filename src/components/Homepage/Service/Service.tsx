import React from 'react';
import s from './service.module.scss'
import {icon_air, icon_sea, icon_railway, icon_road} from '../../../icons/icons'

export function Service() {
    const areas = [
        {
            title: "Air freight",
            image: icon_air,
            alt: "Air"
        },
        {
            title: "Road freight",
            image: icon_road,
            alt: "Road"
        },
        {
            title: "Sea freight",
            image: icon_sea,
            alt: "Sea"
        },
        {
            title: "Railway transportation",
            image: icon_railway,
            alt: "Railway"
        },
    ]
    return (
        <div className={s.container}>
            <div className={s.header}>
                <span className={s.text}>SERVICE</span>
                <span className={s.underText}>wide range of areas</span>
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
    );
}