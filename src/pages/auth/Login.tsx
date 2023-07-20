import type { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import LoginJWT from '../../components/auth/login';

const Login: FC = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <LoginJWT />
        
        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{' '}
          <RouterLink to='/auth/register' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Create Your Account</RouterLink>
        </p>
      </div>
    </div>
  );
};

export default Login;