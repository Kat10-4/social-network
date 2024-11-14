import s from './ProfileInfo.module.css';
import React from 'react';

export const ProfileInfo = () => {
    return <>
        <div>
            <img
                src="https://static.vecteezy.com/system/resources/previews/006/180/174/non_2x/panther-chameleon-on-branch-free-photo.jpg"
                alt="chameleon" className={s.img}/></div>
        <div className={s.description}>
            ava + descript
        </div>
    </>
};