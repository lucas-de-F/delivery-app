import React from 'react';

import Header from '../../components/Header';
import ProductList from '../../components/ProductList';
import TotalPrice from './components/TotalPrice';
import FinalizeOrder from './components/FinalizeOrder';
import DetailsAndDeliveryAddressForm from './components/DetailsAndDeliveryAddressForm';

const Checkout = () => (
  <>
    <Header />
    <ProductList />
    <TotalPrice />
    <DetailsAndDeliveryAddressForm />
    <FinalizeOrder />
    {/* <LoginForm /> */}
  </>
);

export default Checkout;
