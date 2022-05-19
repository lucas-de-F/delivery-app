import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { OrderRequestThunk } from '../../../redux/requestThunks/orderRequest';

import { Header } from '../../../components';
import SellerCard from './components';

function SellerPage() {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.UserSlice);
  const { token } = useSelector((state) => state.UserSlice.auth);

  useEffect(() => {
    dispatch(OrderRequestThunk({ auth, token }));
  }, [auth, dispatch, token]);

  return (
    <>
      <Header />
      <section>
        <div>
          <SellerCard />
        </div>
      </section>
    </>
  );
}

export default SellerPage;
