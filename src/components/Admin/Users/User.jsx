import React from 'react';
import styleCSS from './User.module.css';
import userIMG from '../../../images/User/user.png'
import userDelIMG from '../../../images/User/delUser.png'

let User = (props) => {
    const deleteClient = () => {
        // alert(`${props.user._id}`);
        props.onDeleteUser(props.user._id)
    };

    return <div className={styleCSS.container}>
        <img className={styleCSS.imgItem} alt="user"
             src={userIMG}></img>
        <img className={styleCSS.imgItem} alt="userDel"
             src={userDelIMG} onClick={deleteClient}></img>
        <div className={styleCSS.long}>{props.user._id}</div>
        <div className={styleCSS.long}>{props.user.first_name}</div>
    </div>
}

export default User;