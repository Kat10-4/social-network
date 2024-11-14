import * as React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {PATH} from '../../App';

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.item+' '+s.active}>
                    <NavLink to={PATH.DIALOGS+'/1'}>Kate</NavLink>
                    </div>
                <div className={s.item}>
                    <NavLink to={PATH.DIALOGS+'/2'}>Julia</NavLink>
                    </div>
                <div className={s.item}>
                    <NavLink to={PATH.DIALOGS+'/3'}>Helen</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={PATH.DIALOGS+'/4'}>Lidia</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={PATH.DIALOGS+'/5'}>Tatiana</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={PATH.DIALOGS+'/6'}>Anna</NavLink>
                    </div>
            </div>
            <div className={s.dialogsDIALOGSs}>
                <div className={s.DIALOGS}>Hi</div>
                <div className={s.DIALOGS}>How are you?</div>
                <div className={s.DIALOGS}>What's up?</div>
            </div>
        </div>
    );
};