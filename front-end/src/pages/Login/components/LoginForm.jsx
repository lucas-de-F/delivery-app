import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';
import { useFormik } from 'formik';
import jwtDecode from 'jwt-decode';

import RegisterButton from './RegisterButton';
import loginSchema from './LoginSchema';
import { getToken } from '../../../redux/requestThunks/tokenRequests';
import { setStatus, setAuth, setName } from '../../../redux/userSlice';

const LoginForm = () => {
  const [able, setAble] = useState(true);
  const status = useSelector((state) => state.UserSlice.status);
  const { auth } = useSelector((state) => state.UserSlice);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [err, setError] = useState(false);

  useEffect(() => {
    console.log(auth);
    if (status === 'fulfilled' && auth.role === 'customer') {
      navigate('/customer/products', { replace: true });
      dispatch(setStatus('pending'));
    }

    if (status === 'fulfilled' && auth.role === 'seller') {
      navigate('/seller/orders', { replace: true });
      dispatch(setStatus('pending'));
    }

    try {
      const { token } = JSON.parse(localStorage.getItem('user'));
      if (token) {
        const { name, email, id, role } = jwtDecode(token);

        dispatch(setAuth({ email, userId: id, token, role }));
        dispatch(setName(name));
        dispatch(setStatus('fulfilled'));
      }
    } catch (e) {
      navigate('/login');
    }
  }, [able, status, navigate, dispatch, auth]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: (values) => {
      setError(false);
      const { error } = loginSchema.validate(values);
      if (error) {
        return setAble(true);
      }
      setAble(false);
    },
    onSubmit: (values) => {
      dispatch(getToken(values)).then(unwrapResult).then().catch(setError(true));
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
      {
        err && <div data-testid="common_login__element-invalid-email">ERRO</div>
      }
      <RegisterButton />
    </>
  );
};

export default LoginForm;
