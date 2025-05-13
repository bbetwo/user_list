import React from 'react'
export const UserItem = React.memo(({key,style,user,onClick}) => {
 
    return (
        <div onClick={() => { onClick(user) }}
            style={style}
            className='row'>
            {user.name} s
        </div>
    )
});