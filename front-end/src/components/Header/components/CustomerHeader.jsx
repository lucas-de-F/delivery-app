import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { dataTestId } from '../../../utils';

const CustomerHeader = ({ customerProps }) => {
  const { name, handleClick } = customerProps;

  return (
    <nav>
      <ul>
        <li>
          <Link to="/customer/products" data-testid={ dataTestId.id11 }>
            PRODUTOS
          </Link>
        </li>
        <li>
          <Link to="/customer/orders" data-testid={ dataTestId.id12 }>
            MEUS PEDIDOS
          </Link>
        </li>
        <li data-testid={ dataTestId.id13 }>{ name }</li>
        <button
          type="button"
          onClick={ () => handleClick() }
          data-testid={ dataTestId.id14 }
        >
          <li>
            SAIR
          </li>
        </button>
      </ul>
    </nav>
  );
};

CustomerHeader.propTypes = {
  customerProps: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
  }).isRequired,
};

export default CustomerHeader;
