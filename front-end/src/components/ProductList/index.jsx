import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setCartByInput, removeCart } from '../../redux/cartSlice';
import { dataTestId } from '../../utils';

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
                `${dataTestId.id22}${key}`
              }
            >
              {key + 1}
            </div>
            <div data-testid={ `${dataTestId.id23}${key}` }>
              {payload}
            </div>
            <div
              data-testid={
                `${dataTestId.id24}${key}`
              }
            >
              {cart[payload].quantity}
            </div>
            <div
              data-testid={ `${dataTestId.id25}${key}` }
            >
              {Number(cart[payload].price)
                .toFixed(toFixedNumber).toString().replace('.', ',')}
            </div>
            <div
              data-testid={ `${dataTestId.id26}${key}` }
            >
              {(cart[payload].quantity * cart[payload].price)
                .toFixed(toFixedNumber).toString().replace('.', ',')}
            </div>
            <button
              type="button"
              data-testid={ `${dataTestId.id27}${key}` }
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
