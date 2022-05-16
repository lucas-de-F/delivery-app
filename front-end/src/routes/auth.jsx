import React from 'react';
import {
  useLocation,
  Navigate,
  Outlet,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import useAuth from '../utils/hooks/hookAuth';

export default function RequireAuth({ Urole }) {
  const { auth } = useAuth();
  const location = useLocation();
  console.log(auth.role === Urole);
  if (auth.role === Urole) {
    if (Urole === 'customer') {
      return <Outlet />;
    }
    if (Urole === 'seller') {
      return <Outlet />;
    }
  }

  if (auth?.user) {
    return <Navigate to="/login" state={ { from: location } } replace />;
  }

  return <Navigate to="/login" state={ { from: location } } replace />;
}

RequireAuth.propTypes = {
  Urole: PropTypes.oneOfType([PropTypes.string]).isRequired,
};
