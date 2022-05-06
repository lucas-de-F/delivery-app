/* import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

/* const ROLES = [
  'customer',
  'seller',
  'administrator',
];

// const isAuthentcated = () => false;

const PrivateRoute = ({ allowedRoles }) => {
  const { auth } = useSelector((state) => state.UserSlice);
  // auth.roles = [ consumer ]
  // auth.roles.find((role) => allowedRoles.include(role))

  const handlerAuthorization = () => {
    if (auth?.roles?.find((role) => allowedRoles?.include(role))) {
      return <Outlet />;
    }
    if (auth?.user) {
      return <Navigate to="/unauthorized" replace />;
    }
    return <Navigate to="/login" replace />;
  };

  return (
    handlerAuthorization()
  );
  /* return (
    <Route
      { ...rest }
      render={ (props) => (
        isAuthentcated ? (<Component { ...props } />) : (<Navigate replace to="/login" />)
      ) }
    />
  );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  allowedRoles: PropTypes.string.isRequired,
}; */
