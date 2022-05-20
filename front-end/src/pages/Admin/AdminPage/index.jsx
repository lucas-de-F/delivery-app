import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { OrderRequestThunk } from '../../../redux/requestThunks/orderRequest';

import { Header } from '../../../components';
import { RegisterForm } from './components';

const AdminPage = () => {
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
        <RegisterForm />
      </section>
    </>
  );
};

export default AdminPage;
