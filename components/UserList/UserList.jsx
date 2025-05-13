import { useCallback, useEffect, useState } from "react"
import style from "./UserList.module.css"
import { useDispatch, useSelector } from "react-redux"
import { FixedSizeList } from 'react-window'
import { List } from 'react-virtualized';
import { UserItem } from "../UserItem/UsetItem";

const userGenerate = (num) => {
    const usersList = Array.from({ length: num }, (_, i) => ({
        
        id: i + 1,
        name: `Пользователь ${i + 1}`,
        jobTitle: ['dev','rabotyaga','kura'][i % 3],
        departament: ['front','freza','yandex-lavka'][i % 3],
        company: ['mts','yandex','MAIL.RU-amigo_edition'][i % 3],
    }))

    return usersList
}

export const UserList = () => {
    const dispatch = useDispatch();
    const selectUser = useSelector((state) => state.userData)
   

    const MILLION_USER = 1000000;

    const handlTargetUser = useCallback((user) => {
        dispatch({ type: 'USER_FIND', payload: user })
        console.log(user,'asdasdaf f f f f');
    }, [dispatch])

    useEffect(() => {

        dispatch({ type: 'USER_DATA', payload: userGenerate(MILLION_USER) })
    }, [])
    console.log('sadasdasda');
    
    const row = useCallback(({ key, index, style }) =>  {
        console.log('rirender ss');
         return(
            <UserItem 
            key={key}
            index={index}
            style={style}
            onClick={handlTargetUser}
            user={selectUser[index]}
            />
         )
    //    return (<div onClick={() => { handlTargetUser(selectUser[index]) }}
    //         key={key}
    //         style={style}
    //         className='row'>
    //         {selectUser[index].name}
    //     </div>)
    }, [selectUser, handlTargetUser])

    return (
        <>
            <div className={style.userList}>
                <List
                    height={300}
                    width={350}
                    rowHeight={30}
                    rowCount={selectUser.length}
                    rowRenderer={row}
                    overscanRowCount={100}
                />
            </div>

        </>
    )
}
