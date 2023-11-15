import React from 'react';
import Paginator from "../../Common/Paginator/Paginator";
import User from "./User";
import UsersTable from "./UsersTable";

let Users = (props) => {
    return <div>
        <Paginator currentPage={props.currentPage}
                   onPageChanged={props.onPageChanged}
                   totalCount={props.totalCount}
                   pageSize={props.pageSize}/>
        <UsersTable/>

        <div>
            {props.data.map(u => <User user={u}
                                 key={u._id}
                                 pageSize={props.pageSize}
                                 currentPage={props.currentPage}
                                 onDeleteUser={props.onDeleteUser}/>
            )}</div>

        <UsersTable/>
        <Paginator currentPage={props.currentPage}
                   onPageChanged={props.onPageChanged}
                   totalCount={props.totalCount}
                   pageSize={props.pageSize}/>
    </div>
}

export default Users;