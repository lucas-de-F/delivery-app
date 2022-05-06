import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterButton = () => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      data-testid="common_login__button-register"
      id="common_login__button-register"
      color="primary"
      onClick={ () => navigate('/register') }
    >
      AINDA NÃO TENHO CONTA
    </button>
  );
};

export default RegisterButton;
