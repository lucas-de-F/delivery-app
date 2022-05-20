import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';
import { useFormik } from 'formik';
import jwtDecode from 'jwt-decode';

import RegisterButton from './RegisterButton';
import loginSchema from './LoginSchema';
import LoginError from './LoginError';

import { getToken } from '../../../redux/requestThunks/tokenRequests';
import { setStatus, setAuth, setName } from '../../../redux/userSlice';

import { dataTestId } from '../../../utils';

import Logo from '../../../images/logo.png';

const LoginForm = () => {
  const [able, setAble] = useState(true);
  const status = useSelector((state) => state.UserSlice.status);
  const { auth } = useSelector((state) => state.UserSlice);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [err, setError] = useState(false);

  useEffect(() => {
    if (status === 'fulfilled' && auth.role === 'administrator') {
      navigate('/admin/manage', { replace: true });
      dispatch(setStatus('pending'));
    }

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

      const { name, email, id, role } = jwtDecode(token);
      dispatch(setAuth({ email, userId: id, token, role }));
      dispatch(setName(name));

      if (auth) {
        dispatch(setStatus('fulfilled'));
      }
    } catch (e) { return e; }
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
    <div className="form-content-login">
      <form onSubmit={ formik.handleSubmit }>
        <img src={ Logo } alt="logo" />
        <div>
          <h3>Olho de cobrA</h3>
          <div>
            <input
              type="text"
              data-testid={ dataTestId.id01 }
              placeholder="Email"
              id={ dataTestId.id01 }
              { ...formik.getFieldProps('email') }
            />
            <input
              data-testid={ dataTestId.id02 }
              id={ dataTestId.id02 }
              placeholder="Senha"
              type="password"
              { ...formik.getFieldProps('password') }
            />
          </div>
          <button
            variant="contained"
            color="primary"
            data-testid={ dataTestId.id03 }
            type="submit"
            disabled={ able }
          >
            LOGIN
          </button>
        </div>
      </form>
      {
        err && <LoginError />
      }
      <RegisterButton />
    </div>
  );
};

export default LoginForm;
