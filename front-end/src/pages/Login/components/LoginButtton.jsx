import React from 'react';

import { Button } from '@mui/material';

const LoginButton = () => (
  <Button
    variant="contained"
    color="primary"
    data-testid="common_login__button-login"
    type="button"
  >
    Login
  </Button>
);

export default LoginButton;
