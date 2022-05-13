import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import Header from '../../components/Header';
// import DetailsStatus from './components/DetailsStatus';
// import ProductList from './components/ProductList';
// import TotalPrice from './components/TotalPrice';
// import { ordersRequest } from '../../redux/requestThunks/ordersRequest';

const DetailsOrder = () => {
  const dispatch = useDispatch();
  // const { id } = useSelector((state) => state.UserSlice.auth);

  useEffect(() => {
    // passar id do usuário pra fazer o fetch
    // dispatch(ordersRequest());
  }, [dispatch]);

  return (
    <>
      {' '}
      oioi
      {/* <Header />
      <DetailsStatus />
      <ProductList />
      <TotalPrice /> */}
    </>
  );
};

export default DetailsOrder;
