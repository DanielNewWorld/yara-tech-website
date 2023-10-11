import React from 'react';
import styleCSS from './User.module.css';

let User = ({user}) => {
  return <div>
          <span>
           <div>{user.name}</div>
            <div>{user.id}</div>
            <img className={styleCSS.imgItem} src={user.photos.small != null ? user.photos.small : "https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png"}></img>
            <div>___</div>
          </span>
  </div>
}

export default User;