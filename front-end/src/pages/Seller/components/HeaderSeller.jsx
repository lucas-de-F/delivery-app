import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { dataTestId } from '../../../utils';

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

export default HeaderSeller;
