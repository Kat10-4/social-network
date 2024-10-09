import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';

export const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://static.vecteezy.com/system/resources/previews/006/180/174/non_2x/panther-chameleon-on-branch-free-photo.jpg"
                alt="chameleon"/></div>
            <div>
                ava + descript
            </div>
            <MyPosts/>
        </div>
    );
};

