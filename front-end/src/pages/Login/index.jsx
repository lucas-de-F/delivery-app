import React from 'react';

import { LoginForm } from './components';

import Background from '../../images/background.png';

import './styles.scss';

const Login = () => (
  <section className="section-login">
    <img src={ Background } alt="background" className="background" />
    <div className="content-login">
      <LoginForm />
    </div>
  </section>
);
export default Login;
