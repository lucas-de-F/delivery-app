import React from 'react';

import { Header, ProductList } from '../../../components';
import { TotalPrice, OrderForm } from './components';

import './styles.scss';

const Checkout = () => {
  const elementProducts = () => (
    <div className="checkout-container">
      <div className="finalize-order">
        <ProductList />
        <TotalPrice />
      </div>
      <div className="checkout-container-order-form">
        <OrderForm />
      </div>
    </div>
  );

  return (
    <>
      <Header />
      <section className="section-checkout">
        <div className="content-checkout">
          <h3>DETALHE DO PEDIDO</h3>
          { elementProducts() }
        </div>
      </section>
    </>
  );
};

export default Checkout;
