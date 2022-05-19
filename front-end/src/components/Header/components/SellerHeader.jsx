import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { dataTestId } from '../../../utils';

const SellerHeader = ({ sellerProps }) => {
  const { name, handleClick } = sellerProps;

  return (
    <nav>
      <ul>
        <li>
          <Link to="/seller/orders" data-testid={ dataTestId.id12 }>
            PEDIDOS
          </Link>
        </li>

        <li data-testid={ dataTestId.id13 }>
          { name }
        </li>

        <button type="button" onClick={ handleClick }>
          <li data-testid={ dataTestId.id14 }>
            SAIR
          </li>
        </button>
      </ul>
    </nav>
  );
};

SellerHeader.propTypes = {
  sellerProps: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
  }).isRequired,
};

export default SellerHeader;
