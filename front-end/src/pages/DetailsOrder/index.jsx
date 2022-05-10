import React from 'react';
import Header from '../../components/Header';
import DetailsStatus from './components/DetailsStatus';
import ProductList from './components/ProductList';
import TotalPrice from './components/TotalPrice';

const DetailsOrder = () => (
  <>
    <Header />
    <DetailsStatus />
    <ProductList />
    <TotalPrice />
  </>
);

export default DetailsOrder;
