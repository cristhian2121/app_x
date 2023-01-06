import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../components/auth'

const Profile = () => {

    const auth = useAuth();

  return (
    <>
        <h2>
            {auth.user.username.nickName}
        </h2>
    </>
  )
}

export default Profile