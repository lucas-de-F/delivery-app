import React from 'react';
import RegisterForm from './components';

import './styles.scss';

import Background from '../../images/background.png';

const Register = () => (
  <section className="section-register">
    <img src={ Background } alt="teste" className="background" />
    <div className="content-register">
      <RegisterForm />
    </div>
  </section>
);

export default Register;
