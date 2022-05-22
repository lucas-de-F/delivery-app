import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Header } from '../../../components';
import OrdersList from './components/OrdersList';

import { OrderRequestThunk } from '../../../redux/requestThunks/orderRequest';

import './styles.scss';

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
      <section className="section-orders">
        <div className="content-orders">
          <OrdersList />
        </div>
      </section>
    </>
  );
};

export default DetailsOrder;
