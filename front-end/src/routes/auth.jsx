import React from 'react';
import {
  Navigate,
  Outlet,
} from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import jwtDecode from 'jwt-decode';
import useAuth from '../utils/hooks/hookAuth';
import { setAuth, setName } from '../redux/userSlice';

export default function RequireAuth({ Urole }) {
  const { auth } = useAuth();
  if (auth.role === Urole) {
    if (Urole === 'customer') {
      return <Outlet />;
    }
    if (Urole === 'seller') {
      return <Outlet />;
    }
  }
  const getToken = () => {
    try {
      const { token } = JSON.parse(localStorage.getItem('user'));
      if (token) {
        const { name, email, id, role } = jwtDecode(token);
        dispatch(setAuth({ email, userId: id, token, role }));
        dispatch(setName(name));
        return <Outlet />;
      }
    } catch (e) {
      return <Navigate to="/login" replace />;
    }
  };

  return getToken();
}

RequireAuth.propTypes = {
  Urole: PropTypes.oneOfType([PropTypes.string]).isRequired,
};
