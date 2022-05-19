import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { dataTestId } from '../../utils';

const Header = () => {
  const name = useSelector((state) => state.UserSlice.name);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login', { replace: true });
    window.localStorage.clear();
  };

  return (
    <div>
      <Link to="/customer/products" data-testid={ dataTestId.id11 }>
        PRODUTOS
      </Link>
      <Link to="/customer/orders" data-testid={ dataTestId.id12 }>
        MEUS PEDIDOS
      </Link>
      <p data-testid={ dataTestId.id13 }>{ name }</p>
      <button
        type="button"
        onClick={ () => handleClick() }
        data-testid={ dataTestId.id14 }
      >
        SAIR
      </button>
    </div>
  );
};

export default Header;
