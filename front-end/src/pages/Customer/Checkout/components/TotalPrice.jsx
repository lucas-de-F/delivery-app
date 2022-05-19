import React from 'react';
import { useSelector } from 'react-redux';
import { dataTestId } from '../../../../utils';

const TotalPrice = () => {
  const totalPrice = useSelector((state) => state.CartSlice.totalPrice);

  return (
    <div>
      <span
        data-testid={ dataTestId.id28 }
      >
        {totalPrice}
      </span>
    </div>
  );
};

export default TotalPrice;
