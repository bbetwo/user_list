import { useCallback, useEffect, useState } from "react"
import style from "./UserList.module.css"
import { useDispatch, useSelector } from "react-redux"
import { FixedSizeList } from 'react-window'
import { List } from 'react-virtualized';

const userGenerate = (num) => {
    const usersList = Array.from({ length: num }, (_, i) => ({
        id: i + 1,
        name: `Пользователь ${i + 1}`,
        jobTitle: 'dev',
        departament: 'ss',
        company: 'mts',
    }))

    return usersList
}

export const UserList = () => {
    const dispatch = useDispatch();
    const selectUser = useSelector((state) => state.userData)
    const selectUserFind = useSelector((state) => state.userFind)

    const MILLION_USER = 1000000;

    const handlTargetUser = useCallback((user) => {
        dispatch({ type: 'USER_FIND', payload: user })
        console.log(user);
    }, [dispatch])

    useEffect(() => {

        dispatch({ type: 'USER_DATA', payload: userGenerate(MILLION_USER) })
    }, [])

    const row = useCallback(({ key, index, style }) => (
        <div onClick={() => { handlTargetUser(selectUser[index]) }}
            key={key}
            style={style}
            className='row'>
            {selectUser[index].name}
        </div>
    ), [selectUser, handlTargetUser])

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
