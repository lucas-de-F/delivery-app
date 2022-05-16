import React from 'react';

import jwtDecode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import {
  useNavigate,
} from 'react-router-dom';
import { LoginForm } from './components';

import { setAuth, setName } from '../../redux/userSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = JSON.parse(localStorage.getItem('user'));
  console.log(token);
  if (token) {
    try {
      const { name, email, id, token: localToken } = jwtDecode(token);
      dispatch(setAuth({ email, userId: id, token: localToken }));
      dispatch(setName(name));
    } catch (e) {
      navigate('/login');
    }
  }
  return (
    <LoginForm />
  );
};

export default Login;
