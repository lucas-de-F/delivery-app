import React from 'react';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { dataTestId } from '../../../../utils';

const OrdersList = () => {
  const { orders } = useSelector((state) => state.OrderSlice);

  return (
    <>
      {orders.map((order, key) => (
        <Link to={ `/customer/orders/${order.id}` } key={ `'ol${key + 1}'` }>
          <ol>
            <li data-testid={ `${dataTestId.id33}${order.id}` }>
              {`pedido ${key + 1}`}
            </li>
            <li data-testid={ `${dataTestId.id34}${order.id}` }>
              {order.status}
            </li>
            <li data-testid={ `${dataTestId.id35}${order.id}` }>
              {dayjs(order.saleDate).locale('pt-br').format('DD/MM/YYYY')}
            </li>
            <li data-testid={ `${dataTestId.id36}${order.id}` }>
              {order.totalPrice.toString().replace('.', ',')}
            </li>
          </ol>
        </Link>
      ))}
    </>
  );
};
export default OrdersList;
