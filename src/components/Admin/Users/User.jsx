import React from 'react';
import styleCSS from './User.module.css';
import userIMG from '../../../images/User/user.png'
import DeleteUser from "../ModalDeleteUser/DeleteUser";

let User = (props) => {
    return <div>
        <div className={styleCSS.container}>
            <div><img className={styleCSS.imgItem} alt="user"
                 src={userIMG}></img></div>
            <DeleteUser
                onDeleteUser={props.onDeleteUser}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                deleteID={props.user._id}/>

                <div className={styleCSS.long}>{props.user._id}</div>
                <div className={styleCSS.long}>{props.user.first_name}</div>
            </div>
    </div>
}

export default User;