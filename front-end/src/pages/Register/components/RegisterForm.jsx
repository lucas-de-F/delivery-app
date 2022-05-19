import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { unwrapResult } from '@reduxjs/toolkit';

import { registerUser } from '../../../redux/requestThunks/tokenRequests';
import registerSchema from './RegisterSchema';
import { setStatus } from '../../../redux/userSlice';
import { dataTestId } from '../../../utils';

const RegisterForm = () => {
  const [able, setAble] = useState(true);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.UserSlice.status);

  const navigate = useNavigate();
  const [err, setError] = useState(false);

  useEffect(() => {
    if (status === 'fulfilled') {
      navigate('/customer/products', { replace: true });
      dispatch(setStatus('pending'));
    }
  }, [status, navigate, dispatch]);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validate: (values) => {
      setError(false);

      const { error } = registerSchema.validate(values);
      if (error) {
        return setAble(true);
      }
      setAble(false);
    },
    onSubmit: (values) => {
      dispatch(registerUser(values)).then(unwrapResult).then().catch(setError(true));
    },
  });

  return (
    <form onSubmit={ formik.handleSubmit }>
      <input
        type="text"
        placeholder="name"
        data-testid={ dataTestId.id06 }
        id={ dataTestId.id06 }
        { ...formik.getFieldProps('name') }
      />
      <input
        type="text"
        placeholder="email"
        data-testid={ dataTestId.id07 }
        id={ dataTestId.id07 }
        { ...formik.getFieldProps('email') }
      />
      <input
        type="password"
        placeholder="password"
        data-testid={ dataTestId.id08 }
        id={ dataTestId.id08 }
        { ...formik.getFieldProps('password') }
      />
      {err === true
        ? <div data-testid={ dataTestId.id10 }>ERRO</div>
        : <> </> }
      <button
        type="submit"
        variant="contained"
        data-testid={ dataTestId.id09 }
        disabled={ able }
      >
        CADASTRAR
      </button>
    </form>
  );
};

export default RegisterForm;
