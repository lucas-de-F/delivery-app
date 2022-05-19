import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../../components/Header';
import { OrderRequestThunk } from '../../../redux/requestThunks/orderRequest';

import SectionDetails from './components/SectionDetails';

function SellerDetails() {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.UserSlice);
  const { token } = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    dispatch(OrderRequestThunk({ auth, token }));
  }, [auth, dispatch, token]);

  return (
    <>
      <Header />
      <SectionDetails />
    </>
  );
}

export default SellerDetails;
