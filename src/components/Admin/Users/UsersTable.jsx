import React from 'react';
import styleCSS from "./User.module.css";

let Users = () => {
    return <div className={styleCSS.containerTable}>
        <div className={styleCSS.short}></div>
        <div className={styleCSS.long}>First Name</div>
        <div className={styleCSS.long}>id</div>
    </div>
}

export default Users;