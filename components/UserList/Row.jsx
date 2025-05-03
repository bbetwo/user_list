import React from 'react'
export const Row = ({style,user,onClick}) => {
 

    // console.log('rirender ss');
    
    return (
        <div onClick={() => { onClick(user) }}
           
            style={style}
            className='row'>
            {user.name} s
        </div>
    )
};