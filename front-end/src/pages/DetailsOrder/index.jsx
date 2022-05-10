import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import DetailsStatus from './components/DetailsStatus';
import ProductList from './components/ProductList';
import TotalPrice from './components/TotalPrice';
import { ordersRequest } from '../../redux/requestThunks/ordersRequest';

const DetailsOrder = () => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.UserSlice.auth);

  useEffect(() => {
    dispatch(ordersRequest());
  }, [dispatch]);

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
