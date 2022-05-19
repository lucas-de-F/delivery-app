import React, { useState } from 'react';
import { useFormik } from 'formik';

import registerSchema from './RegisterSchema';
import { dataTestId } from '../../../../utils';
import RegisterUtils from '../../../../utils/requests/registerRequest';

const RegisterForm = () => {
  const [able, setAble] = useState(true);
  const [err, setError] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      role: 'seller',
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
      RegisterUtils.registerUser(values);
      formik.resetForm();
      setAble(true);
    },
  });

  return (
    <>
      <h3>Cadastrar novo usuário</h3>
      <form onSubmit={ formik.handleSubmit }>
        <input
          type="text"
          placeholder="name"
          data-testid={ dataTestId.id64 }
          id={ dataTestId.id64 }
          { ...formik.getFieldProps('name') }
        />
        <input
          type="text"
          placeholder="email"
          data-testid={ dataTestId.id65 }
          id={ dataTestId.id65 }
          { ...formik.getFieldProps('email') }
        />
        <input
          type="password"
          placeholder="password"
          data-testid={ dataTestId.id66 }
          id={ dataTestId.id66 }
          { ...formik.getFieldProps('password') }
        />
        <select
          data-testid={ dataTestId.id67 }
          id={ dataTestId.id67 }
          value="seller"
          { ...formik.getFieldProps('role') }
        >
          <option value="seller">Vendedor</option>
          <option value="customer">Usuário</option>
        </select>
        {err === true
          ? <div data-testid={ dataTestId.id74 }>ERRO</div>
          : <> </> }
        <button
          type="submit"
          variant="contained"
          data-testid={ dataTestId.id68 }
          disabled={ able }
        >
          CADASTRAR
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
