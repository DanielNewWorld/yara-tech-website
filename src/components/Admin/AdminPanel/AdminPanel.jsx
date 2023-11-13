import React from 'react';
import UsersContainer from "../Users/UsersContainer";
import ModalAddUser from "../ModalAddUser/ModalAddUser";

const AdminPanel = () => {
    return (
        <div>
            <ModalAddUser/>
            <UsersContainer/>
        </div>
    );
};

export default AdminPanel;