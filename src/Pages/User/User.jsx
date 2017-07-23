import React from 'react'
import UserPic from './UserPic'
import UserInfo from './UserInfo'
import "./User.scss"

const User = () => 
    <div className="User">
        <UserPic />
        <UserInfo />
    </div>

export default User;