import React from 'react';
import { Link } from 'react-router-dom';

const LoginButton = () => (
  <span className="span-login">
    Tens uma conta?
    {' '}
    {
      <Link
        to="/login"
        id="common_login__button-register"
      >
        inicia sessão
      </Link>
    }
  </span>
);

export default LoginButton;
