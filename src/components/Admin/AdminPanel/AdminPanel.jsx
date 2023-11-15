import React, {Suspense} from 'react';
import UsersContainer from "../Users/UsersContainer";
import Preloader from "../../Common/Preloader/Preloader";

const AdminPanel = () => {
    return (
        <div>
            <Suspense fallback={<div><Preloader/></div>}>
                <UsersContainer/>
            </Suspense>
        </div>
    );
};

export default AdminPanel;