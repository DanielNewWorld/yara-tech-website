import React from 'react';
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, onPageChanged, totalCount, pageSize, data}) => {
  return <div>
    <Paginator currentPage={currentPage}
               onPageChanged={onPageChanged}
               totalCount={totalCount}
               pageSize={pageSize}/>
    <div>
    {data.map(u =>
          <User user={u}
                key={u.id} />
      )}
    </div>
  </div>
}

export default Users;