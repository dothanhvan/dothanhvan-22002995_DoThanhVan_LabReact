import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  return (
    <div style={{ textAlign: 'center', width: '100vw', height: '100vh', backgroundColor: theme === 'light' ? '#fff': '#111'}}>
      <button style={{}} onClick={() => dispatch(toggleTheme())}>
        Chuyển sang {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
};

export default ThemeToggle;
