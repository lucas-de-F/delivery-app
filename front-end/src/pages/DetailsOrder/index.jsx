import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import DetailsStatus from './components/DetailsStatus';
import ProductList from './components/ProductList';
import TotalPrice from './components/TotalPrice';
import { OrderRequestThunk } from '../../redux/requestThunks/orderRequest';

const DetailsOrder = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.UserSlice);
  const { token } = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    dispatch(OrderRequestThunk({ auth, token }));
  }, [auth, dispatch, token]);

  return (
    <>
      <Header />
      <DetailsStatus />
      <ProductList />
      <TotalPrice />
    </>
  );
};
export default DetailsOrder;
