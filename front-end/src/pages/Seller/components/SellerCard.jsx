import React from 'react';
import { useSelector } from 'react-redux';

const SellerCard = () => {
  const sellers = useSelector((state) => state.orderSlice.order);
  console.log(sellers);

  return (
    <ul>
      {/* {
        data.map(({ pedido, status, date, preco, rua }, i) => (
          <button key={ `key-${i}` } type="button">
            <li data-testid={ `seller_orders__element-order-id-${i}` }>{ pedido }</li>
            <li data-testid={ `seller_orders__element-delivery-status-${i}` }>
              { status }
            </li>
            <li data-testid={ `seller_orders__element-order-date-${i}` }>{ date }</li>
            <li data-testid={ `seller_orders__element-card-price-${i}` }>{ preco }</li>
            <li data-testid={ `seller_orders__element-card-address-${i}` }>{ rua }</li>
          </button>
        ))
      } */}
    </ul>
  );
};

export default SellerCard;
