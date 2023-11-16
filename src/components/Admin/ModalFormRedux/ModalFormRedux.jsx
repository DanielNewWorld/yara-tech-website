import React, { useState } from 'react';
import { Button, Modal} from '@material-ui/core';
// import { useDispatch} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {Input} from "../../Common/FormsControls/FormsControls";
import {containsDigitsValidator, maxLengthCreator, required} from "../../../utils/validators/validators";
import styleCSS from './ModalFormRedux.module.css';
import {SUBMIT_FORM} from "../../../redux/formAddReducer";

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
                    validate={[required, maxLengthCreator(40)]}
                />
            </div>
            <div className={styleCSS.MuiFormControlRoot}>
                <Field type="text" placeholder="Phone" component={Input} name={"phone"}
                       label="Phone"
                       validate={[required, maxLengthCreator(20), containsDigitsValidator]}/>
            </div>
            <Button className={styleCSS.button} type="submit" color="primary" variant="contained">
                Submit
            </Button>
        </form>
    );
});

const ModalFormRedux = (props) => {
    // const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onSubmit = (data) => {
        props.onAddUser(props.currentPage, props.pageSize, data.firstname);
        // alert(data.firstname);
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

export default ModalFormRedux;