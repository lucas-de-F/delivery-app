import React from 'react';
import PropTypes from 'prop-types';

import { dataTestId } from '../../../../utils';

const ProductList = ({ productsList }) => (
  <table>
    <thead>
      <tr>
        <th>Item</th>
        <th>Descrição</th>
        <th>Quantidade</th>
        <th>Valor Unitário</th>
        <th>Sub-total</th>
      </tr>
    </thead>
    <tbody>
      {
        productsList.map((product, key) => (
          <tr key={ `key-${key}` }>
            <td data-testid={ `${dataTestId.id41}${key}` }>
              { product.id }
            </td>
            <td data-testid={ `${dataTestId.id42}${key}` }>
              { product.name }
            </td>
            <td data-testid={ `${dataTestId.id43}${key}` }>
              { product.SalesProducts.quantity }
            </td>
            <td data-testid={ `${dataTestId.id46}${key}` }>
              { product.price }
            </td>
            <td data-testid={ `${dataTestId.id44}${key}` }>
              { (product.SalesProducts.quantity * product.price).toFixed(2) }
            </td>
          </tr>
        ))
      }
    </tbody>
  </table>
);

ProductList.propTypes = {
  productsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    SalesProducts: PropTypes.shape({
      quantity: PropTypes.number,
    }),
  })).isRequired,
};

export default ProductList;
