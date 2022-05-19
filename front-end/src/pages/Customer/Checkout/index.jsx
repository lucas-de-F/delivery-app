import React from 'react';

import { Header, ProductList } from '../../../components';
import { TotalPrice, OrderForm } from './components';

const Checkout = () => (
  <>
    <Header />
    <ProductList />
    <TotalPrice />
    <OrderForm />
  </>
);

export default Checkout;
