import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const HeaderSeller = () => {
  const name = useSelector((state) => state.UserSlice.name);
  const navigate = useNavigate();

  const handleClick = () => {
    window.localStorage.clear();

    navigate('/login', { replace: true });
  };

  return (
    <nav>
      <ul>
        <li
          data-testid="customer_products__element-navbar-link-orders"
        >
          <h3 to="/customer/products">
            PEDIDOS
          </h3>
        </li>

        <li
          data-testid="customer_products__element-navbar-user-full-name"
        >
          { name }
        </li>

        <button type="button" onClick={ handleClick }>
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

export default HeaderSeller;
