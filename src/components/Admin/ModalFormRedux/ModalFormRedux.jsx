// Import необходимых компонентов из Material-UI и Redux
import React, { useState } from 'react';
import { Button, Modal, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {Input} from "../../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import styleCSS from './ModalFormRedux.module.css';

// Action creators и reducers ReduxForm
const SUBMIT_FORM = 'SUBMIT_FORM';

const formReducer = (state = {}, action) => {
    switch (action.type) {
        case SUBMIT_FORM:
            // Обработка отправки формы, например, вызов API
            console.log('Form submitted with data:', action.payload);
            return state;
        default:
            return state;
    }
};

// Компонент формы
const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <TextField
        label={label}
        error={touched && !!error}
        helperText={touched && error}
        {...input}
        {...custom}
    />
);

// Создание ReduxForm
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
                <Field
                    name="lastName"
                    component={renderTextField}
                    label="Last Name"
                />
            </div>
            <Button className={styleCSS.button} type="submit" color="primary" variant="contained">
                Submit
            </Button>
        </form>
    );
});

// Компонент модального окна с формой
const ModalFormRedux = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onSubmit = (data) => {
        // Диспатч Redux action с данными формы
        dispatch({ type: SUBMIT_FORM, payload: data });
        alert(data.firstname);
        // Закрытие модального окна после отправки формы
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