import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { dataTestId } from '../../../utils';

const CartButton = () => {
  const navigate = useNavigate();

  const totalPrice = useSelector((state) => state.CartSlice.totalPrice);
  return (
    <button
      disabled={ totalPrice === '0,00' }
      onClick={ () => navigate('/customer/checkout', { replace: true }) }
      data-testid="customer_products__button-cart"
      type="button"
    >
      <span
        data-testid={ dataTestId.id21 }
      >
        {totalPrice}
      </span>
    </button>
  );
};

export default CartButton;
