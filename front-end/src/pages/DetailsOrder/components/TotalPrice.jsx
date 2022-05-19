import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { dataTestId } from '../../../utils';

const TotalPrice = () => {
  const [totalPrice, setTotalPrice] = useState(null);
  const pageId = Number(window.location.pathname.split('/')[3]);
  const { orders } = useSelector((state) => state.OrderSlice);

  useEffect(() => {
    if (orders && orders.length !== 0) {
      const findOrder = orders.find((order) => order.id === pageId);
      return setTotalPrice(findOrder.totalPrice);
    }
  }, [orders, pageId]);

  return (
    <div>
      { totalPrice && (
        <span
          data-testid={ dataTestId.id45 }
        >
          { totalPrice.toString().replace('.', ',') }
        </span>
      )}
    </div>
  );
};

export default TotalPrice;
