import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import Header from '../../components/Header';
import OrdersList from './components/OrdersList';
import { OrderRequestThunk } from '../../redux/requestThunks/orderRequest';

const DetailsOrder = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.UserSlice);
  const { token } = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    console.log('token', token);
    dispatch(OrderRequestThunk({ auth, token }))
      .then(unwrapResult).then().catch((e) => console.log('ERRO', e));
  }, [auth, dispatch, token]);

  return (
    <>
      <Header />
      <OrdersList />
    </>
  );
};

export default DetailsOrder;
