import React from 'react';
// import { useSelector } from 'react-redux';

const DetailsStatus = () => {
  // const { id, saleDate, status } = useSelector((state) => state.orderSlice.order);
  const a = 'a';
  return (
    <div style={ { width: 500 } }>
      Detalhes do pedido
      {/* <div>
        <ul style={ { display: 'flex' } }>
          <li
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            { id }
          </li>
          <li
            data-testid=" customer_order_details__element-order-details-label-seller-name"
          >
            Fulana Pereira
          </li>
          <li
            data-testid="customer_order_details__element-order-details-label-order-date"
          >
            { saleDate}
          </li>
          <li
            data-testid="
          customer_order_details__element-order-details-label-delivery-status"
          >
            { status }
          </li>
          <button
            type="button"
            data-testid="customer_order_details__button-delivery-check"
          >
            Marcar como entregue
          </button>
        </ul>
      </div> */}
    </div>
  );
};

export default DetailsStatus;
