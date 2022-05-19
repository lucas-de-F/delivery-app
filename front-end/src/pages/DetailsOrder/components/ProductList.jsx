import React from 'react';
import PropTypes from 'prop-types';
import { dataTestId } from '../../../utils';

const ProductList = ({ productsList }) => (
  <>
    {(
      productsList.map((product, key) => (
        <ol key={ key }>
          <ul
            data-testid={ `${dataTestId.id41}${key}` }
          >
            { product.id }
          </ul>
          <ul
            data-testid={ `${dataTestId.id42}${key}` }
          >
            { product.name }
          </ul>
          <ul
            data-testid={ `${dataTestId.id43}${key}` }
          >
            { product.SalesProducts.quantity }
          </ul>
          <ul
            data-testid={ `${dataTestId.id46}${key}` }
          >
            { product.price }
          </ul>
          <ul
            data-testid={ `${dataTestId.id44}${key}` }
          >
            { (product.SalesProducts.quantity * product.price).toFixed(2) }
          </ul>
        </ol>
      ))
    )}
  </>
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
