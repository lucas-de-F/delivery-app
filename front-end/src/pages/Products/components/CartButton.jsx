import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CartButton = () => {
  const totalPrice = useSelector((state) => state.CartSlice.totalPrice);

  return (
    <Link to="/customer/orders">
      <button data-testid="customer_products__button-cart" type="button">
        <span
          data-testid="customer_products__checkout-bottom-value"
        >
          {totalPrice}
        </span>
      </button>
    </Link>
  );
};

export default CartButton;
