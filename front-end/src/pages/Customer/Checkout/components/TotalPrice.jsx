import React from 'react';
import { useSelector } from 'react-redux';
import { dataTestId } from '../../../../utils';

const TotalPrice = () => {
  const totalPrice = useSelector((state) => state.CartSlice.totalPrice);

  return (
    <div className="checkout-total-price">
      <div>
        <span
          data-testid={ dataTestId.id28 }
        >
          Total:
          {' '}
          R$
          {' '}
          {totalPrice}
        </span>
      </div>
    </div>
  );
};

export default TotalPrice;
