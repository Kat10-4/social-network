import * as React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {PATH} from '../../App';

type DialogItemProps = {
    name: string
    id: string
}

type MessageProps={
    message:string
}

const DialogItem = ({name, id}: DialogItemProps) => {
    return <div>
        <NavLink to={PATH.DIALOGS + '/' + id}
                 className={({isActive}) => (isActive ? s.item + ' ' + s.active : s.item)}>{name}</NavLink>
    </div>
}

const Message=({message}:MessageProps)=> {
    return <div className={s.message}>{message}</div>
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Kate'} id={'1'}/>
                <DialogItem name={'Julia'} id={'2'}/>
                <DialogItem name={'Helen'} id={'3'}/>
                <DialogItem name={'Lidia'} id={'4'}/>
                <DialogItem name={'Tatiana'} id={'5'}/>
                <DialogItem name={'Anna'} id={'6'}/>
            </div>
            <div className={s.dialogsMessages}>
                <Message message={'Hi'}/>
                <Message message={'How are you?'}/>
                <Message message={'What\'s up?'}/>
            </div>
        </div>
    );
};