import React from 'react';

const DetailsStatus = () => (
  <div style={ { width: 500 } }>
    Detalhes do pedido
    <div>
      <ul style={ { display: 'flex' } }>
        <li
          data-testid="customer_order_details__element-order-details-label-order-id"
        >
          ID do pedido
        </li>
        <li
          data-testid=" customer_order_details__element-order-details-label-seller-name"
        >
          Nome do vendedor
        </li>
        <li
          data-testid="customer_order_details__element-order-details-label-order-date"
        >
          Data do pedido
        </li>
        <li
          data-testid="
          customer_order_details__element-order-details-label-delivery-status"
        >
          Status de entrega
        </li>
        <li
          data-testid="customer_order_details__button-delivery-check"
        >
          Marcar como entregue
        </li>
      </ul>
    </div>
  </div>
);

export default DetailsStatus;
