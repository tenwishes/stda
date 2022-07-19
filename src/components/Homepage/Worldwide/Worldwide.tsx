import React from 'react';
import s from './worldwide.module.scss'
import {icon_point, worldMap, fullWorldMap} from '../../../icons/icons'

export function Worldwide(){
    return (
        <div className={s.main}>
            <div className={s.text}>
                <p>Сargo <span>shipments</span> organization throughout the world</p>
            </div>
            <div className={s.worldmap}>
                <img src={worldMap} alt={""}/>
            </div>
        </div>
    );
}