import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const name = useSelector((state) => state.UserSlice.name);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login', { replace: true });
    window.localStorage.clear();
  };

  return (
    <nav>
      <ul>
        <li
          data-testid="customer_products__element-navbar-link-products"
        >
          <Link to="/customer/products">
            PRODUTOS
          </Link>
        </li>
        <li
          data-testid="customer_products__element-navbar-link-orders"
        >
          <Link to="/customer/orders">
            MEUS PEDIDOS
          </Link>
        </li>
        <li
          data-testid="customer_products__element-navbar-user-full-name"
        >
          { name }
        </li>
        <button type="button" onClick={ () => handleClick() }>
          <li
            data-testid="customer_products__element-navbar-link-logout"
          >
            SAIR
          </li>
        </button>
      </ul>
    </nav>
  );
};

export default Header;
