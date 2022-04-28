import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
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
        CICRANO
      </li>
      <li
        data-testid="customer_products__element-navbar-link-logout"
      >
        SAIR
      </li>
    </ul>
  </nav>
);

export default Header;
