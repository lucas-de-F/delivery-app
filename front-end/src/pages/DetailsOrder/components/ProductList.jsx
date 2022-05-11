import React from 'react';
import { useSelector } from 'react-redux';

const ProductList = () => {
  const { products } = useSelector((state) => state.orderSlice.order);

  return (
    <ol>
      { !products ? 'carrinho vazio' : Object.keys(products).map((payload, key) => (
        <li
          key={ key }
          style={ { display: 'flex', justifyContent: 'space-between', margin: 10 } }
        >
          <div
            data-testid={
              `customer_order_details__element-order-table-item-number-${key}`
            }
          >
            { products[key].id }
          </div>
          <div data-testid={ `customer_order_details__element-order-table-name-${key}` }>
            { products[key].name }
          </div>
          <div
            data-testid={ `customer_order_details__element-order-table-quantity-${key}` }
          >
            { products[key].SalesProducts.quantity }
          </div>
          <div
            data-testid={
              `customer_order_details__element-order-table-unit-price-${key}`
            }
          >
            { products[key].price }
          </div>
          <div
            data-testid={
              `customer_order_details__element-order-table-sub-total--${key}`
            }
          >
            {(products[key].SalesProducts.quantity * products[key].price)
              .toFixed(toFixedNumber).toString().replace('.', ',')}
          </div>
        </li>
      ))}
    </ol>
  );
};

export default ProductList;
