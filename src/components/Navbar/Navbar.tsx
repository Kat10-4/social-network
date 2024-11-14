import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom';
import {PATH} from '../../App';

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={PATH.PROFILE} className={({ isActive }) => (isActive ? s.active : '')}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH.DIALOGS} className={({ isActive }) => (isActive ? s.active : '')}>Messages</NavLink>
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

