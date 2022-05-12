import React from 'react';
import { useSelector } from 'react-redux';

const dayjs = require('dayjs');

const OrdersList = () => {
  const { orders } = useSelector((state) => state.OrderSlice);
  // const generateID = (id) => {
  //   if (id.toString().length === 1) return `00${id}`;
  //   if (id.toString().length === 2) return `0${id}`;

  //   return id;
  // };
  return (
    <>
      {orders.map((order, key) => (
        <ol key={ `'ol${key + 1}'` }>
          <li data-testid={ `customer_orders__element-order-id-${order.id}` }>
            pedido
            {' '}
            {key + 1}
          </li>
          <li data-testid={ `customer_orders__element-delivery-status-${order.id}` }>
            {order.status}
          </li>
          <li data-testid={ `customer_orders__element-order-date-${order.id}` }>
            {dayjs(order.saleDate).format('DD/MM/YYYY')}
          </li>
          <li data-testid={ `customer_orders__element-card-price-${order.id}` }>
            {order.totalPrice}
          </li>
        </ol>
      ))}
    </>
  );
};
export default OrdersList;
