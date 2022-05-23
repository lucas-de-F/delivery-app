import React from 'react';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { dataTestId, generateId, vefiryStatus } from '../../../../utils';
import CarrinhoVazio from '../../../../images/carrinho-vazio.png';

const OrdersList = () => {
  const { orders } = useSelector((state) => state.OrderSlice);

  return (
    <div className="link-order-details">
      {
        orders.length < 1 ? <img src={ CarrinhoVazio } alt="carrinho-vazio" />
          : orders.map((order, key) => (
            <Link to={ `/customer/orders/${order.id}` } key={ `'ol${key + 1}'` }>
              <ol>
                <div className="link-ol-li-1">
                  <li
                    data-testid={ `${dataTestId.id34}${order.id}` }
                    className={ `li-link-1 ${vefiryStatus(order.status)}` }
                  >
                    {order.status.toUpperCase()}
                  </li>
                  <li
                    data-testid={ `${dataTestId.id35}${order.id}` }
                    className="li-link-2"
                  >
                    {dayjs(order.saleDate).locale('pt-br').format('DD/MM/YYYY')}
                  </li>
                </div>
                <div className="link-ol-li-2">
                  <li
                    data-testid={ `${dataTestId.id33}${order.id}` }
                    className="li-link-3"
                  >
                    <span>Pedido:</span>
                    {' '}
                    {`${generateId(key + 1)}`}
                  </li>
                  <li
                    data-testid={ `${dataTestId.id36}${order.id}` }
                    className="li-link-4"
                  >
                    {order.totalPrice.toString().replace('.', ',')}
                  </li>
                </div>
              </ol>
            </Link>
          ))
      }
    </div>
  );
};
export default OrdersList;
