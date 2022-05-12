import React from 'react';

const data = [
  {
    pedido: '0001',
    status: 'PENDENTE',
    date: '17/98/1999',
    preco: '1,99',
    rua: 'Rua casa do caralho',
  },
  {
    pedido: '0002',
    status: 'FINALIZADO',
    date: '17/58/1989',
    preco: '50,0',
    rua: 'Rua casa do caralho V2',
  },
];

const SellerCard = () => (
  <ul>
    {
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
    }
  </ul>
);

export default SellerCard;
