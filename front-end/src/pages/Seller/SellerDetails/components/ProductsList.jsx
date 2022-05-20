import React from 'react';
import propTypes from 'prop-types';

import { dataTestId } from '../../../../utils';

const ProductsList = ({ products }) => (
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
        products.map((item, i) => (
          <tr key={ `key-${i}` }>
            <td data-testid={ `${dataTestId.id58}${i}` }>
              { item.id }
            </td>
            <td data-testid={ `${dataTestId.id59}${i}` }>
              { item.name}
            </td>
            <td data-testid={ `${dataTestId.id60}${i}` }>
              { item.SalesProducts.quantity }
            </td>
            <td data-testid={ `${dataTestId.id61}${i}` }>
              {item.price }
            </td>
            <td data-testid={ `${dataTestId.id62}${i}` }>
              { (Number(item.price) * item.SalesProducts.quantity).toFixed(2)}
            </td>
          </tr>
        ))
      }
    </tbody>
  </table>
);

ProductsList.propTypes = {
  products: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      name: propTypes.string.isRequired,
      price: propTypes.string.isRequired,
      SalesProducts: propTypes.shape({
        quantity: propTypes.number.isRequired,
      }).isRequired,
    }),
  ).isRequired,
};

export default ProductsList;
