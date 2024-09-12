import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.profile}>
            <div><img
                src="https://static.vecteezy.com/system/resources/previews/006/180/174/non_2x/panther-chameleon-on-branch-free-photo.jpg"
                alt="chameleon"/></div>
            <div>
                ava + descript
            </div>
            <div>My posts
                <div>
                    New post
                </div>
                <div className={'posts'}>
                    <div className={s.item}>Post 1</div>
                    <div className={s.item}>Post 2</div>
                </div>
            </div>
        </div>
    );
};

export default Profile;