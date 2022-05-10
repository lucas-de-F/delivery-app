import React from 'react';
import { useSelector } from 'react-redux';

const TotalPrice = () => {
  const totalPrice = useSelector((state) => state.CartSlice.totalPrice);

  return (
    <div>
      <span
        data-testid="customer_checkout__element-order-total-price"
      >
        {totalPrice}
      </span>
    </div>
  );
};

export default TotalPrice;
