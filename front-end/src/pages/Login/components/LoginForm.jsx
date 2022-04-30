import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import RegisterButton from './RegisterButton';
import loginSchema from './LoginSchema';

const LoginForm = () => {
  const [able, setAble] = useState(true);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: (values) => {
      const { error } = loginSchema.validate(values);
      if (error) {
        return setAble(true);
      }
      setAble(false);
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <form onSubmit={ formik.handleSubmit }>
        <TextField
          type="text"
          data-testid="common_login__input-email"
          placeholder="email"
          id="common_login__input-email"
          { ...formik.getFieldProps('email') }
        />
        <TextField
          data-testid="common_login__input-password"
          id="common_login__input-password"
          placeholder="********"
          type="password"
          { ...formik.getFieldProps('password') }
        />
        <Button
          variant="contained"
          color="primary"
          data-testid="common_login__button-login"
          type="submit"
          disabled={ able }
        >
          Login
        </Button>
      </form>
      <RegisterButton />
    </>
  );
};

export default LoginForm;
