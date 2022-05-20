import React from 'react';

import { dataTestId } from '../../../utils';

const RegisterError = () => (
  <span
    className="register-error"
    data-testid={ dataTestId.id10 }
  >
    E-mail já existe!
  </span>
);

export default RegisterError;
