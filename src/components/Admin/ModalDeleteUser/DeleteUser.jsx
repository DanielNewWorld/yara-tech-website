import React, {useState} from 'react';
import styleCSS from './FindUser.module.css';
import {reduxForm} from "redux-form";

const DeleteUserForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={styleCSS.container}>
                <div><h3>Delete client?</h3></div>
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
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const onSubmit = (formData) => {
        alert(formData.id);
        // props.onGetUser(props.currentPage,props.pageSize,formData.find)
        closeModal();
    };

    return (
        <div>
            <button className={styleCSS.menuMark} onClick={openModal}>Delete client</button>

            {isModalOpen && (
            <div className={styleCSS.modalOverlay}>
                <div className={styleCSS.modalContent}>
                    <DeleteUserReduxForm onSubmit={onSubmit}/>
                    <button onClick={closeModal}>Close</button>
                </div>
            </div>
            )}
        </div>
    );
};

export default FindUser;