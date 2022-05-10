import React from 'react';

const ProductList = () => (
  <ol>
    <li style={ { display: 'flex', justifyContent: 'space-between', margin: 10 } }>
      <div
        data-testid="customer_order_details__element-order-table-item-number-"
      >
        id
      </div>
      <div data-testid="customer_order_details__element-order-table-name-">
        nome do produto
      </div>
      <div
        data-testid="customer_order_details__element-order-table-quantity-"
      >
        quantidade
      </div>
      <div
        data-testid="customer_order_details__element-order-table-unit-price-"
      >
        preço unitário
      </div>
      <div
        data-testid="customer_order_details__element-order-table-sub-total-"
      >
        subtotal
      </div>
    </li>
  </ol>
);

export default ProductList;
