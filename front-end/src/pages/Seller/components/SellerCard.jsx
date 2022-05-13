import React from 'react';
import { useSelector } from 'react-redux';

const SellerCard = () => {
  const orders = useSelector((state) => state.OrderSlice.orders);

  return (
    <ul>
      {
        orders.map((
          {
            id,
            status,
            saleDate,
            totalPrice,
            deliveryAddress,
          }, i,
        ) => (
          <button key={ `key-${i}` } type="button">
            <li data-testid={ `seller_orders__element-order-id-${id}` }>
              { id }
            </li>
            <li data-testid={ `seller_orders__element-delivery-status-${id}` }>
              { status }
            </li>
            <li data-testid={ `seller_orders__element-order-date-${id}` }>
              { saleDate }
            </li>
            <li data-testid={ `seller_orders__element-card-price-${id}` }>
              { totalPrice }
            </li>
            <li data-testid={ `seller_orders__element-card-address-${id}` }>
              { deliveryAddress }
            </li>
          </button>
        ))
      }
    </ul>
  );
};

export default SellerCard;
