import React from 'react';

import { TextField } from '@mui/material';

import LoginButton from './LoginButtton';

import RegisterButton from './RegisterButton';

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <TextField
        type="text"
        data-testid="common_login__input-email"
        placeholder="email"
        id="common_login__input-email"
      />
      <TextField
        data-testid="common_login__input-password"
        id="common_login__input-password"
        placeholder="********"
        type="password"
      />
      <LoginButton />
      <RegisterButton />
    </>
  )
}

export default LoginForm;
