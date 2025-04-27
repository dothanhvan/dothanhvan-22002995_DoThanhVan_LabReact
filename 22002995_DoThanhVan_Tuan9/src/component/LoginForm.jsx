import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, clearMessage } from '../redux/authSlice';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const message = useSelector((state) => state.auth.message);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === '123456') {
      dispatch(login({ username }));
    } else {
      alert('Tài khoản hoặc mật khẩu sai!');
    }
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => dispatch(clearMessage()), 3000);
      return () => clearTimeout(timer);
    }
  }, [message, dispatch]);

  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      {!isLoggedIn ? (
        <form onSubmit={handleLogin}>
          <h2>Đăng nhập</h2>
          <input
            type="text"
            placeholder="Tên đăng nhập"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          /><br /><br />
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br /><br />
          <button type="submit">Đăng nhập</button>
        </form>
      ) : (
        <p>👋 Chào {username}!</p>
      )}
      {message && <p style={{ color: 'green', marginTop: 10 }}>{message}</p>}
    </div>
  );
};

export default LoginForm;
