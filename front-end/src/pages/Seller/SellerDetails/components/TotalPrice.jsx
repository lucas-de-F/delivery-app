import React from 'react';
import PropTypes from 'prop-types';

import { dataTestId } from '../../../../utils';

const TotalPrice = ({ value }) => (
  <h2 data-testid={ dataTestId.id63 }>
    {value.toString().replace('.', ',')}
  </h2>
);

TotalPrice.propTypes = {
  value: PropTypes.string.isRequired,
};

export default TotalPrice;
