import * as React from 'react';
import s from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.item+' '+s.active}>Kate</div>
                <div className={s.item}>Julia</div>
                <div className={s.item}>Helen</div>
                <div className={s.item}>Lidia</div>
                <div className={s.item}>Tatiana</div>
                <div className={s.item}>Anna</div>
            </div>
            <div className={s.dialogsMessages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>What's up?</div>
            </div>
        </div>
    );
};