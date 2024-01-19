import React from 'react';
import { useSelector } from 'react-redux';
import { selectProfile } from '../redux/slice/profileSlice';
const Profile = () => {
  const { username, name } = useSelector(selectProfile);
// const username=useSelector((store)=>store.profile.username)
// const name=useSelector((store)=>store.profile.name)

  return (
    <div>
      <h2>Profile Information</h2>
      <p>Username: {username}</p>
      <p>Name:{name} </p>
    </div>
  );
};

export default Profile;
