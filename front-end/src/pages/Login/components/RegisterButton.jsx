import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RegisterButton = (name) => {
  const navigate = useNavigate();
  return (
    <Button
      variant="contained"
      data-testid="common_login__button-register"
      id="common_login__button-register"
      color="primary"
      onClick={ () => navigate('/register') }
    >
      AINDA NÃO TENHO CONTA
    </Button>
  );
};

export default RegisterButton;
