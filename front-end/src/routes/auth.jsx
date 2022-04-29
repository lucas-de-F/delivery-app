import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const isAuthentcated = () => false;

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    { ...rest }
    render={ (props) => (
      isAuthentcated ? (<Component { ...props } />) : (<Navigate replace to="/login" />)
    ) }
  />
);

export default PrivateRoute;

PrivateRoute.propTypes = {
  component: PropTypes.node.isRequired,
};
