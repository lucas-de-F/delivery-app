import React from 'react';
import { useFormik } from 'formik';
import { Button, TextField } from '@mui/material';

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={ formik.handleSubmit }>
      <TextField
        type="text"
        placeholder="name"
        data-testid="common_register__input-name"
        id="common_register__input-name"
        { ...formik.getFieldProps('name') }
      />
      <TextField
        type="text"
        placeholder="email"
        data-testid="common_register__input-email"
        id="common_register__input-email"
        { ...formik.getFieldProps('email') }
      />
      <TextField
        type="password"
        placeholder="password"
        data-testid="common_register__input-password"
        id="common_register__input-password"
        { ...formik.getFieldProps('password') }
      />
      <Button
        type="buttom"
        variant="contained"
        data-testid="common_register__button-register"
      >
        CADASTRAR
      </Button>
    </form>
  );
};

export default RegisterForm;
