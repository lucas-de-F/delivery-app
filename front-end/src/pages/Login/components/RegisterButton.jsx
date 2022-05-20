import React from 'react';
import { Link } from 'react-router-dom';
import { dataTestId } from '../../../utils';

const RegisterButton = () => (
  <span className="span-register">
    Ainda não tem um cadastro?
    {' '}
    {
      <Link
        to="/register"
        ata-testid={ dataTestId.id04 }
        id={ dataTestId.id04 }
      >
        register
      </Link>
    }
  </span>
);

export default RegisterButton;
