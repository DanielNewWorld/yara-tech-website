import React, { useState } from 'react';
import styleCSS from './ModalAddUser.module.css';
import {Input} from "../../Common/FormsControls/FormsControls";
import {containsDigitsValidator, maxLengthCreator, required} from "../../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import {getPageSize} from "../../../redux/users-selectors";

const AddUserForm = (props) => {
    // const [formData, setFormData] = useState({ firstname: '', phone: '380' });
    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData((prevData) => ({ ...prevData, [name]: value }));
    // };

    return (
        <form onSubmit={props.handleSubmit}>
            <label>
                First Name:
                <Field type="text" placeholder="First Name" component={Input} name={"firstname"}
                       validate={[required, maxLengthCreator(10)]}/>
            </label>
            <br />
            <label>
                Phone:
                <Field type="text" placeholder="phone" component={Input} name={"phone"}
                       validate={[required, maxLengthCreator(10), containsDigitsValidator]}/>
            </label>
            <br />
            <button type="submit">Send</button>
        </form>
    )
}

const AddUserReduxForm = reduxForm({
    form: 'addUser'
})(AddUserForm)

const ModalAddUser = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const onSubmit = (formData) => {
        // alert(formData.phone);
        props.onAddUser(props.currentPage,props.pageSize,formData.firstname)
        closeModal();
    };

    return (
        <div>
            <button className={styleCSS.menuMark} onClick={openModal}>Add client</button>

            {isModalOpen && (
                <div className={styleCSS.modalOverlay}>
                    <div className={styleCSS.modalContent}>
                        <h2>Enter new client details</h2>
                        <AddUserReduxForm onSubmit={onSubmit}/>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalAddUser;