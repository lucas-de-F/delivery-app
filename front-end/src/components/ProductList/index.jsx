import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setCartByInput, removeCart } from '../../redux/cartSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.CartSlice);

  useEffect(() => {
    dispatch(setCartByInput(cart));
  }, [cart, dispatch]);
  const toFixedNumber = 3;
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
              data-testid={
                `customer_checkout__element-order-table-item-number-${key}`
              }
            >
              {key + 1}
            </div>
            <div data-testid={ `customer_checkout__element-order-table-name-${key}` }>
              {payload}
            </div>
            <div
              data-testid={
                `customer_checkout__element-order-table-quantity-${key}`
              }
            >
              {cart[payload].quantity}
            </div>
            <div
              data-testid={ `customer_checkout__element-order-table-unit-price-${key}` }
            >
              {Number(cart[payload].price)
                .toFixed(toFixedNumber).toString().replace('.', ',')}
            </div>
            <div
              data-testid={ `customer_checkout__element-order-table-sub-total-${key}` }
            >
              {(cart[payload].quantity * cart[payload].price)
                .toFixed(toFixedNumber).toString().replace('.', ',')}
            </div>
            <button
              type="button"
              data-testid={ `customer_checkout__element-order-table-remove-${key}` }
              onClick={ () => dispatch(removeCart({ name: payload, removeAll: true })) }
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
