import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={'/profile'}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/messages'}>Messages</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to={''}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={''}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={''}>Settings</NavLink>
            </div>
        </nav>
    );
};

