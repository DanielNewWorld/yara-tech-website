import React from 'react';
import styleCSS from './User.module.css';

let User = ({user}) => {
    return <div className={styleCSS.container}>
        <img className={styleCSS.imgItem} alt="user"
             src={"https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png"}></img>
        <div className={styleCSS.long}>{user._id}</div>
        <div className={styleCSS.long}>{user.first_name}</div>
    </div>
}

export default User;