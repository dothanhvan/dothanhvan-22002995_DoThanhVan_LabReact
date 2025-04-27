import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authSlice';

const UserInfo = () => {
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useSelector((state) => state.auth);

  if (!isLoggedIn) return null;

  return (
    <div style={{ textAlign: 'center', marginTop: 20 }}>
      <h3>Xin chào, {user.username}</h3>
      <button onClick={() => dispatch(logout())}>Đăng xuất</button>
    </div>
  );
};

export default UserInfo;
