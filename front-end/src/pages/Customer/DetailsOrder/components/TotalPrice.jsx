import React from 'react';
import PropTypes from 'prop-types';

import { dataTestId } from '../../../../utils';

const TotalPrice = ({ totalPrice }) => (
  <div className="total-price-button-order">
    <p
      data-testid={ dataTestId.id45 }
    >
      <span>Total: </span>
      {' '}
      { `R$ ${totalPrice.toString().replace('.', ',')}` }
    </p>
  </div>
);

TotalPrice.propTypes = {
  totalPrice: PropTypes.string.isRequired,
};

export default TotalPrice;
