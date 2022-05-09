import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setCartByInput, removeCart } from '../../redux/cartSlice';

/* const mocks = [
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
]; */

const ProductList = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.CartSlice);

  useEffect(() => {
    dispatch(setCartByInput(cart));
  }, [cart, dispatch]);

  return (
    <div style={ { width: 500 } }>
      Finalizar produto
      <ol>
        { !cart ? 'carrinho vazio' : Object.keys(cart).map((payload, key) => (
          <li
            key={ key }
            style={ { display: 'flex', justifyContent: 'space-between', margin: 10 } }
          >
            <div
              data-testid={ `customer_checkout__element-order-table-item-number-${key}` }
            >
              {key + 1}
            </div>
            <div data-testid={ `customer_checkout__element-order-table-name-${key}` }>
              {payload}
            </div>
            <div data-testid={ `customer_checkout__element-order-table-quantity-${key}` }>
              {cart[payload].quantity}
            </div>
            <div
              data-testid={ `customer_checkout__element-order-table-unit-price-${key}` }
            >
              {cart[payload].price}
            </div>
            <div
              data-testid={ `customer_checkout__element-order-table-sub-total-${key}` }
            >
              {cart[payload].quantity * cart[payload].price}
            </div>
            <button
              type="button"
              data-testid={ `customer_checkout__element-order-table-remove-${key}` }
              onClick={ () => dispatch(removeCart({ name: payload })) }
            >
              Remove
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ProductList;
