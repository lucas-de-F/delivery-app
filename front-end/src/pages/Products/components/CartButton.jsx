import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CartButton = () => {
  const navigate = useNavigate();

  const totalPrice = useSelector((state) => state.CartSlice.totalPrice);
  console.log(Number(totalPrice));
  return (
    <button
      disabled={ totalPrice === '0,00' }
      onClick={ () => navigate('/customer/checkout', { replace: true }) }
      data-testid="customer_products__button-cart"
      type="button"
    >
      <span
        data-testid="customer_products__checkout-bottom-value"
      >
        {totalPrice}
      </span>
    </button>
  );
};

export default CartButton;
