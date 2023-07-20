import type { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import RegisterJWT from '../../components/auth/register';

const Register: FC = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Register New Account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <RegisterJWT />
        <p className="mt-10 text-center text-sm text-gray-500">
          Already a member?{' '}
          <RouterLink to='/auth/login' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Go to Login</RouterLink>
        </p>
      </div>
    </div>
  );
};

export default Register;