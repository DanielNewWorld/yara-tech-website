import React, {useState} from 'react';
import styleCSS from './DeleteUser.module.css';
import {reduxForm} from "redux-form";
import userDelIMG from "../../../images/User/delUser.png";

const DeleteUserForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={styleCSS.container}>
                <div><h3>Delete client id: {props.deleteID}?</h3></div>
                <div>
                    <button type="submit" className={styleCSS.menuMark}>Yes, delete client</button>
                </div>
            </div>
        </form>
    )
}

const DeleteUserReduxForm = reduxForm({
    form: 'deleteUser'
})(DeleteUserForm)

const DeleteUser = (props) => {
    const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);

    const openModal = () => {
        setIsModalOpenDelete(true);
    };

    const closeModal = () => {
        setIsModalOpenDelete(false);
    };

    const onSubmit = () => {
        // alert(props.deleteID);
        props.onDeleteUser(props.login, props.password, props.currentPage, props.pageSize, '', props.deleteID)
        closeModal();
    };

    return (
        <div>
            <img className={styleCSS.imgItem} alt="userDel"
                 src={userDelIMG} onClick={openModal}></img>

            {isModalOpenDelete && (
            <div className={styleCSS.modalOverlay}>
                <div className={styleCSS.modalContent}>
                    <DeleteUserReduxForm onSubmit={onSubmit} deleteID={props.deleteID}/>
                    <button onClick={closeModal}>Close</button>
                </div>
            </div>
            )}
        </div>
    );
};

export default DeleteUser;