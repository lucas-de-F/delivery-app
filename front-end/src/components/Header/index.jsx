import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AdminHeader, CustomerHeader, SellerHeader } from './components';

const Header = () => {
  const name = useSelector((state) => state.UserSlice.name);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login', { replace: true });
    window.localStorage.clear();
  };

  const { role } = JSON.parse(localStorage.getItem('user'));

  if (role === 'administrator') {
    return <AdminHeader adminProps={ { name, handleClick } } />;
  }

  if (role === 'seller') {
    return <SellerHeader sellerProps={ { name, handleClick } } />;
  }

  return (
    <CustomerHeader customerProps={ { name, handleClick } } />
  );
};

export default Header;
