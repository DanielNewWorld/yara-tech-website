import React, {useState} from 'react';
import styleCSS from './ModalAddUser.module.css';
import {Input} from "../../Common/FormsControls/FormsControls";
import {containsDigitsValidator, maxLengthCreator, required} from "../../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import Modal from "../Modal";

const AddUserForm = props => {
        const {handleSubmit, showModal, handleCloseModal} = props;

        return (
            <Modal>
                <div className={`modal ${showModal ? 'show' : 'hide'}`}>
                    <form onSubmit={handleSubmit}>
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
                            <button onClick={handleCloseModal}>Close</button>
                        </div>
                    </form>
                </div>
            </Modal>
        )
}

export default reduxForm({
    form: 'addUser'
})(AddUserForm)

    // const onSubmit = (formData) => {
    //     // alert(formData.phone);
    //     props.onAddUser(props.currentPage, props.pageSize, formData.firstname)
    //     closeModal();
    // };

            // <button className={styleCSS.menuMark} onClick={openModal}>Add client</button>