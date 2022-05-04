import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useFormik } from 'formik';

import RegisterButton from './RegisterButton';
import loginSchema from './LoginSchema';
import { getToken } from '../../../redux/requestThunks/tokenRequests';

const LoginForm = () => {
  const [able, setAble] = useState(true);
  const status = useSelector((state) => state.UserSlice.status);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'fulfilled') {
      navigate('/customer/products');
    }
  }, [status, navigate]);

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
      dispatch(getToken(values));
    },
  });

  return (
    <>
      <form onSubmit={ formik.handleSubmit }>
        <input
          type="text"
          data-testid="common_login__input-email"
          placeholder="email"
          id="common_login__input-email"
          { ...formik.getFieldProps('email') }
        />
        <input
          data-testid="common_login__input-password"
          id="common_login__input-password"
          placeholder="********"
          type="password"
          { ...formik.getFieldProps('password') }
        />
        <button
          variant="contained"
          color="primary"
          data-testid="common_login__button-login"
          type="submit"
          disabled={ able }
        >
          Login
        </button>
      </form>
      <RegisterButton />
    </>
  );
};

export default LoginForm;
