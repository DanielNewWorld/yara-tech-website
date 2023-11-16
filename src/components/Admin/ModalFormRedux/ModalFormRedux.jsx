import React, { useState } from 'react';
import { Button, Modal, TextField } from '@material-ui/core';
import { useDispatch} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {Input} from "../../Common/FormsControls/FormsControls";
import {containsDigitsValidator, maxLengthCreator, required} from "../../../utils/validators/validators";
import styleCSS from './ModalFormRedux.module.css';
// import {SUBMIT_FORM} from "../../../redux/formAddReducer";

const MyForm = reduxForm({ form: 'myForm' })((props) => {
    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit} className={styleCSS.form}>
            <div className={styleCSS.MuiFormControlRoot}>
                <Field
                    // component={renderTextField}
                    label="First Name"

                    type="text"
                    placeholder="First Name"
                    component={Input}
                    name={"firstname"}
                    validate={[required, maxLengthCreator(40)]}
                />
            </div>
            <div className={styleCSS.MuiFormControlRoot}>
                <Field type="text" placeholder="Phone" component={Input} name={"phone"}
                       validate={[required, maxLengthCreator(20), containsDigitsValidator]}/>
            </div>
            <Button className={styleCSS.button} type="submit" color="primary" variant="contained">
                Submit
            </Button>
        </form>
    );
});

const ModalFormRedux = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onSubmit = (data) => {
        // dispatch({ type: SUBMIT_FORM, payload: data });
        alert(data.firstname);
        handleClose();
    };

    return (
        <div>
            <Button onClick={handleOpen} color="primary" variant="contained" className={styleCSS.ButtonOpenModal}>
                Open Modal
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

export default ModalFormRedux;