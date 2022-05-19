import React from 'react';
import { useNavigate } from 'react-router-dom';
import { dataTestId } from '../../../utils';

const RegisterButton = () => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      data-testid={ dataTestId.id04 }
      id={ dataTestId.id04 }
      color="primary"
      onClick={ () => navigate('/register') }
    >
      AINDA NÃO TENHO CONTA
    </button>
  );
};

export default RegisterButton;
