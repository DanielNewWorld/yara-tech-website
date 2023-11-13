import React from 'react';
import Paginator from "../../Common/Paginator/Paginator";
import User from "./User";
import UsersTable from "./UsersTable";

let Users = ({currentPage, onPageChanged, totalCount, pageSize, data}) => {
  return <div>
    <Paginator currentPage={currentPage}
               onPageChanged={onPageChanged}
               totalCount={totalCount}
               pageSize={pageSize}/>
    <UsersTable/>

    <div>{data.map(u =>
          <User user={u}
                key={u.id} />
      )}</div>

    <UsersTable/>
    <Paginator currentPage={currentPage}
               onPageChanged={onPageChanged}
               totalCount={totalCount}
               pageSize={pageSize}/>
  </div>
}

export default Users;