import React from 'react';

import { dataTestId } from '../../../utils';

const LoginError = () => (
  <span
    data-testid={ dataTestId.id05 }
    className="login-error"
  >
    Email ou senha inválidos(s)
  </span>
);

export default LoginError;
