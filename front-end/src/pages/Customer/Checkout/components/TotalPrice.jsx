import React from 'react';
import { useSelector } from 'react-redux';
import { dataTestId } from '../../../../utils';

const TotalPrice = () => {
  const totalPrice = useSelector((state) => state.CartSlice.totalPrice);

  return (
    <div className="checkout-total-price">
      <div>
        <p
          data-testid={ dataTestId.id28 }
        >
          <span>Total:</span>
          {' '}
          {`R$ ${totalPrice}`}
        </p>
      </div>
    </div>
  );
};

export default TotalPrice;
