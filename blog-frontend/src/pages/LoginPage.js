import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import AuthForm from '../container/auth/LoginForm';

const LoginPage = () => {
  return (
    <AuthTemplate>
      <AuthForm></AuthForm>
    </AuthTemplate>
  );
};

export default LoginPage;
