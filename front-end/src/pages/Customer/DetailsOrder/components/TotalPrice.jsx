import React from 'react';
import PropTypes from 'prop-types';

import { dataTestId } from '../../../../utils';

const TotalPrice = ({ totalPrice }) => (
  <div>
    <span
      data-testid={ dataTestId.id45 }
    >
      { totalPrice.toString().replace('.', ',') }
    </span>
  </div>
);

TotalPrice.propTypes = {
  totalPrice: PropTypes.string.isRequired,
};

export default TotalPrice;
