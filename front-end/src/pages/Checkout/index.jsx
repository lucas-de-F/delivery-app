import React from 'react';

import Header from '../../components/Header';
import ProductList from '../../components/ProductList';
import TotalPrice from './components/TotalPrice';
import OrderForm from './components/OrderForm';

const Checkout = () => (
  <>
    <Header />
    <ProductList />
    <TotalPrice />
    <OrderForm />
    {/* <LoginForm /> */}
  </>
);

export default Checkout;
