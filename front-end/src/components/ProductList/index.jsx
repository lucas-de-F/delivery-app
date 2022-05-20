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

  return (
    <div style={ { width: 500 } }>
      Finalizar Pedido
      { Object.keys(cart).length === 0 ? <h4>Carrinho Vazio</h4>
        : (
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Descrição</th>
                <th>Quantidade</th>
                <th>Valor Unitário</th>
                <th>Sub-total</th>
                <th>Remover Item</th>
              </tr>
            </thead>
            <tbody>
              {
                Object.keys(cart).map((payload, key) => (
                  <tr key={ `key-${key}` }>
                    <td data-testid={ `${dataTestId.id22}${key}` }>
                      { key + 1 }
                    </td>
                    <td data-testid={ `${dataTestId.id23}${key}` }>
                      { payload }
                    </td>
                    <td
                      data-testid={ `${dataTestId.id24}${key}` }
                    >
                      {cart[payload].quantity}
                    </td>
                    <td data-testid={ `${dataTestId.id25}${key}` }>
                      {Number(cart[payload].price)
                        .toFixed(2)
                        .toString()
                        .replace('.', ',')}
                    </td>
                    <td data-testid={ `${dataTestId.id26}${key}` }>
                      {(cart[payload].quantity * cart[payload].price)
                        .toFixed(2)
                        .toString()
                        .replace('.', ',')}
                    </td>
                    <td>
                      <button
                        type="button"
                        data-testid={ `${dataTestId.id27}${key}` }
                        onClick={ () => dispatch(removeCart({
                          name: payload,
                          removeAll: true,
                        })) }
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        )}
    </div>
  );
};

export default ProductList;
