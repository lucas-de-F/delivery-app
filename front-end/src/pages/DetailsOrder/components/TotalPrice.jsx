import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const TotalPrice = () => {
  const [totalPrice, setTotalPrice] = useState(null);
  const pageId = Number(window.location.pathname.split('/')[3]);
  const { orders } = useSelector((state) => state.OrderSlice);

  useEffect(() => {
    if (orders && orders.length === (pageId)) {
      const findOrder = orders.find((order) => order.id === pageId);
      setTotalPrice(findOrder.totalPrice);
    }
  }, [orders, pageId]);

  return (
    <div>
      { totalPrice && (
        <span
          data-testid="customer_order_details__element-order-total-price"
        >
          { totalPrice.toString().replace('.', ',') }
        </span>
      )}
    </div>
  );
};

export default TotalPrice;
