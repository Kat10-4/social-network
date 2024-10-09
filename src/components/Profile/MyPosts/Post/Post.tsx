import React from 'react';
import s from './Post.module.css'



const Post = (props:any) => {

    return (
        <div className={s.item}>
            <img
                src={'https://parade.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk0OTMxNTc0Njc1NzQzOTA2/avatar-3-evil-navi-james-cameron.jpg'}
                alt={'Avatar'}/>
            {props.message}
            <div>
                <span>{props.likeCount} like </span>
                <span> dislike</span>
            </div>
        </div>
    )
};

export default Post;