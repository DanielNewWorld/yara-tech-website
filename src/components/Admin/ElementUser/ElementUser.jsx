import React, {useState} from 'react';
import styleCSS from './ElementUser.module.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const ElementUserForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={styleCSS.container}>
                <div><h3>Enter new client details</h3></div>
                <div>
                    <Field type="text" placeholder={props.firstname} component={Input} name={"firstnameUpdate"}
                           validate={[required, maxLengthCreator(40)]}/>
                </div>
                <div>
                    <button type="submit" className={styleCSS.menuMark}>Update</button>
                </div>
            </div>
        </form>
    )
}

const ElementUserReduxForm = reduxForm({
    form: 'elementUser'
})(ElementUserForm)

const ElementUser = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const onSubmit = (formData) => {
        // alert(formData.firstnameUpdate);
        props.onUpdateUser(props.currentPage, props.pageSize, formData.firstnameUpdate, props.selectedID)
        closeModal();
    };

    return (
        <div>
            <div onClick={openModal} className={styleCSS.container}>{props.elementValue}</div>

            {isModalOpen && (
            <div className={styleCSS.modalOverlay}>
                <div className={styleCSS.modalContent}>
                    <ElementUserReduxForm onSubmit={onSubmit} firstname={props.elementValue}/>
                    <button onClick={closeModal}>Close</button>
                </div>
            </div>
            )}
        </div>
    );
};

export default ElementUser;