import React from 'react';
import {Link} from "react-router-dom";
import s from './notfound.module.scss'

export function Notfound() {
    return (
        <div className={s.main}>
            <h1>Page is notfound! Go to <Link to="/">homepage</Link></h1>
        </div>
    );
}