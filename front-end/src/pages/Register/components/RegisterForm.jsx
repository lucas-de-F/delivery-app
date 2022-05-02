import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { Button, TextField } from '@mui/material';

import { registerUser } from '../../../redux/requestThunks/tokenRequests';
import registerSchema from './RegisterSchema';

const RegisterForm = () => {
  const [able, setAble] = useState(true);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validate: (values) => {
      const { error } = registerSchema.validate(values);
      if (error) {
        return setAble(true);
      }
      setAble(false);
    },
    onSubmit: (values) => {
      dispatch(registerUser(values));
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
        type="submit"
        variant="contained"
        data-testid="common_register__button-register"
        disabled={ able }
      >
        CADASTRAR
      </Button>
    </form>
  );
};

export default RegisterForm;
