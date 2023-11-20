import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import {Input} from "../../Common/FormsControls/FormsControls";
import styleCSS from './ModalAddUserRedux.module.css';
import {containsDigitsValidator, maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength = maxLengthCreator(20);

const AddForm = reduxForm({ form: 'addUser' })((props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={styleCSS.container}>
                <div><h3>Add client</h3></div>
                <Field
                    label="First Name"
                    type="text"
                    placeholder="First Name"
                    component={Input}
                    name={"firstname"}
                    validate={[required, maxLength]}
                />
            </div>
                <Field type="text" placeholder="Phone" component={Input} name={"phone"}
                       label="Phone"
                       validate={[required, containsDigitsValidator, maxLength]}
                />
            <button className={styleCSS.menuMark} type="submit">
                Add client
            </button>
        </form>
    );
});

const ModalAddUserRedux = (props) => {
    const [isModalOpenAdd, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onSubmit = (data) => {
        props.onAddUser(props.currentPage, props.pageSize, data.firstname);
        handleClose();
    };

    return (
        <div>
            <button onClick={handleOpen} className={styleCSS.menuMark}>
                Add client
            </button>

            {isModalOpenAdd && (
            <div className={styleCSS.modalOverlay}>
                <div className={styleCSS.modalContent}>
                    <AddForm onSubmit={onSubmit} />
                    <button onClick={handleClose}>Close</button>
                </div>
            </div>
                )}
        </div>
    );
};

export default ModalAddUserRedux;