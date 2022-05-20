import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { dataTestId, selectedStyle } from '../../../utils';

import Logo from '../../../images/logo.png';
import Products from '../../../images/wine-bottles.png';
import Orders from '../../../images/checklist.png';
import User from '../../../images/user.png';
import Logout from '../../../images/logout.png';

import './CustomerHeader.scss';

const CustomerHeader = ({ customerProps }) => {
  const { name, handleClick } = customerProps;

  const { handleClickStyle, result } = selectedStyle();

  useEffect(() => {
    handleClickStyle();
  }, [result, handleClickStyle]);

  return (
    <div className="header-container">
      <div ref={ result } className="header-orders-and-products-container">
        <Link
          className="header-orders-and-products-button selected"
          to="/customer/products"
          data-testid={ dataTestId.id11 }
        >
          <img src={ Products } alt="products" />
          <p className="header-text-button">Produtos</p>
        </Link>
        <Link
          className="header-orders-and-products-button"
          to="/customer/orders"
          data-testid={ dataTestId.id12 }
        >
          <img src={ Orders } alt="pedidos" />
          <p className="header-text-button">Pedidos</p>
        </Link>
      </div>
      <img className="header-logo-content" src={ Logo } alt="logo" />
      <div className="header-user-and-logout-container">
        <div className="header-user-content">
          <img className="header-icon-button" src={ User } alt="user" />
          <p
            className="header-text-button"
            data-testid={ dataTestId.id13 }
          >
            { name }
          </p>
        </div>
        <button
          className="header-logout-content"
          type="button"
          onClick={ () => handleClick() }
          data-testid={ dataTestId.id14 }
        >
          <img src={ Logout } alt="logout" />
          <p
            className="header-text-button"
          >
            Sair
          </p>
        </button>
      </div>
    </div>
  );
};

CustomerHeader.propTypes = {
  customerProps: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
  }).isRequired,
};

export default CustomerHeader;
