import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const name = useSelector((state) => state.UserSlice.name);

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
        <li
          data-testid="customer_products__element-navbar-link-logout"
        >
          SAIR
        </li>
      </ul>
    </nav>
  );
};

export default Header;
