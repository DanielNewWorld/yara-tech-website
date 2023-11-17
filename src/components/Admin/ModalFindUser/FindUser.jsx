import React, {useState} from 'react';
import styleCSS from './FindUser.module.css';
import {Input} from "../../Common/FormsControls/FormsControls";
import {maxLengthCreator} from "../../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";

const FindUserForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={styleCSS.containerFind}>
                <div><h3>Сlient search</h3></div>
                <div>
                    <Field type="text" placeholder="Find by..." component={Input} name={"find"}
                           // validate={[required, maxLengthCreator(40)]}
                           validate={[maxLengthCreator()]}
                    />
                </div>
                <div>
                    <button type="submit" className={styleCSS.menuMark}>Find by first name</button>
                </div>
            </div>
        </form>
    )
}

const FindUserReduxForm = reduxForm({
    form: 'findUser'
})(FindUserForm)

const FindUser = (props) => {
    const [isModalOpenFind, setIsModalOpenFind] = useState(false);

    const openModal = () => {
        setIsModalOpenFind(true);
    };

    const closeModal = () => {
        setIsModalOpenFind(false);
    };

    const onSubmit = (formData) => {
        // alert(formData.find);
        props.onGetUser(props.currentPage,props.pageSize,formData.find)
        closeModal();
    };

    return (
        <div>
            <button className={styleCSS.menuMark} onClick={openModal}>Find client</button>

            {isModalOpenFind && (
            <div className={styleCSS.modalOverlay}>
                <div className={styleCSS.modalContent}>
                    <FindUserReduxForm onSubmit={onSubmit}/>
                    <button onClick={closeModal}>Close</button>
                </div>
            </div>
            )}
        </div>
    );
};

export default FindUser;