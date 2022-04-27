import React from 'react';

import { TextField } from '@mui/material';

const PasswordInput = () => (
  <TextField
    data-testid="common_login__input-password"
    id="common_login__input-password"
    placeholder="********"
    type="password"
  />
);
export default PasswordInput;
