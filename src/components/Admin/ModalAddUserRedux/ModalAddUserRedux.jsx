import React, { useState } from 'react';
import { Button, Modal} from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';
import {Input} from "../../Common/FormsControls/FormsControls";
import styleCSS from './ModalAddUserRedux.module.css';
import {containsDigitsValidator, maxLengthCreator} from "../../../utils/validators/validators";

const MyForm = reduxForm({ form: 'addUser' })((props) => {
    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit} className={styleCSS.form}>
            <div className={styleCSS.MuiFormControlRoot}>
                <Field
                    label="First Name"
                    type="text"
                    placeholder="First Name"
                    component={Input}
                    name={"firstname"}
                    // validate={[required, maxLengthCreator(40)]}
                    validate={[maxLengthCreator()]}
                />
            </div>
            <div className={styleCSS.MuiFormControlRoot}>
                <Field type="text" placeholder="Phone" component={Input} name={"phone"}
                       label="Phone"
                       // validate={[maxLengthCreator(20)]}
                       validate={[containsDigitsValidator()]}
                />
            </div>
            <Button className={styleCSS.button} type="submit" color="primary" variant="contained">
                Submit
            </Button>
        </form>
    );
});

const ModalAddUserRedux = (props) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onSubmit = (data) => {
        props.onAddUser(props.currentPage, props.pageSize, data.firstname);
        handleClose();
    };

    return (
        <div>
            <Button onClick={handleOpen} className={styleCSS.menuMark}>
                Add client
            </Button>
            <Modal open={open} onClose={handleClose} className={styleCSS.ModalForm}>
                <div>
                    <h2>Modal Form</h2>
                    <MyForm onSubmit={onSubmit} />
                </div>
            </Modal>
        </div>
    );
};

export default ModalAddUserRedux;