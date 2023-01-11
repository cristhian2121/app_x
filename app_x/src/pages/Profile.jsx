import React from 'react'
import { useAuth } from '../components/auth'
import StudentsList from './StudentsList';

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