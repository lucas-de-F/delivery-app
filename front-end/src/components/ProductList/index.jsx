import React from 'react';

const mocks = [
  {
    quantity: 1,
    name: 'NOME PRODUTO1',
    price: 5.50,
  },
  {
    quantity: 3,
    name: 'NOME PRODUTO2',
    price: 5.50,
  },
  {
    quantity: 1,
    name: 'NOME PRODUTO3',
    price: 3.44,
  },
  {
    quantity: 4,
    name: 'NOME PRODUTO4',
    price: 5.50,
  },
  {
    quantity: 1,
    name: 'NOME PRODUTO5',
    price: 5.50,
  },
  {
    quantity: 3,
    name: 'NOME PRODUTO6',
    price: 3.44,
  },
];

const ProductList = () => (
  <div style={ { width: 500 } }>
    Finalizar produto
    <ol>
      {mocks.map((product, key) => (
        <li
          key={ key }
          data-testid="customer_products__element-navbar-link-products"
          style={ { display: 'flex', justifyContent: 'space-between', margin: 10 } }
        >
          <div data-testid="customer_checkout__element-order-table-item-number-">
            { key + 1 }
          </div>
          <div data-testid="customer_checkout__element-order-table-name-">
            { product.name }
          </div>
          <div data-testid="customer_checkout__element-order-table-quantity-">
            { product.quantity }
          </div>
          <div data-testid="customer_checkout__element-order-table-price-">
            { product.price }
          </div>
          <div data-testid="customer_checkout__element-order-table-price-">
            { product.price * product.quantity }
          </div>
          <button
            type="button"
            data-testid="customer_checkout__element-order-table-remove-"
          >
            Remove
          </button>
        </li>
      ))}
    </ol>
  </div>
);
export default ProductList;
