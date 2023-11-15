import React, {useState} from 'react';
import styleCSS from './ModalAddUser.module.css';
import {Input} from "../../Common/FormsControls/FormsControls";
import {containsDigitsValidator, maxLengthCreator, required} from "../../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";

const AddUserForm = (props) => {
    // const [formData, setFormData] = useState({ firstname: '', phone: '380' });
    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData((prevData) => ({ ...prevData, [name]: value }));
    // };

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={styleCSS.container}>
                <div><h3>Enter new client details</h3></div>
                <div>
                    <Field type="text" placeholder="First Name" component={Input} name={"firstname"}
                           validate={[required, maxLengthCreator(40)]}/>
                </div>
                <div>
                    <Field type="text" placeholder="Phone" component={Input} name={"phone"}
                           validate={[required, maxLengthCreator(20), containsDigitsValidator]}/>
                </div>
                <button type="submit" className={styleCSS.menuMark}>Add client</button>
            </div>
        </form>
    )
}

const AddUserReduxForm = reduxForm({
    form1: 'addUser'
})(AddUserForm)

const ModalAddUser = (props) => {
    const [isModalOpenAdd, setIsModalOpenAdd] = useState(false);

    const openModal = () => {
        setIsModalOpenAdd(true);
    };

    const closeModal = () => {
        setIsModalOpenAdd(false);
    };

    const onSubmit = (formData) => {
        // alert(formData.phone);
        props.onAddUser(props.currentPage, props.pageSize, formData.firstname)
        closeModal();
    };

    return (
        <div>
            <button className={styleCSS.menuMark} onClick={openModal}>Add client</button>

            {isModalOpenAdd && (
                <div className={styleCSS.modalOverlay}>
                    <div className={styleCSS.modalContent}>
                        <AddUserReduxForm onSubmit={onSubmit}/>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalAddUser;