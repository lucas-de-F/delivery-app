import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OrderRequestThunk } from '../../redux/requestThunks/orderRequest';

import { HeaderSeller } from '../Seller/components';
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
      <HeaderSeller />
      <SectionDetails />
    </>
  );
}

export default SellerDetails;
