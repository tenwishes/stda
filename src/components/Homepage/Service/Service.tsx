import React from 'react';
import s from './service.module.scss'

export function Service() {
    return (
        <div className={s.container}>
            <div className={s.header}>
                <span className={s.text}>SERVICE</span>
                <span className={s.underText}>wide range of areas</span>
            </div>
            <div className={s.areas}>
                <div className={s.area}>
                    <div>
                        <img src={""} alt={""}/>
                    </div>
                    <span></span>
                </div>
            </div>
        </div>
    );
}