import type { FC } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
// import useMounted from '../../hooks/useMounted';

interface LoginUser {
  email: string,
  password: string
}

const LoginJWT: FC = () => {
  const { login: loginUser } = useAuth() as any;

  const { register, handleSubmit, formState: { errors } } = useForm<LoginUser>({
    defaultValues: {
      email: "",
      password: ""
    }
  });
  const onSubmit = async (data: LoginUser) => {
    console.log(data)
    try {
      await loginUser(data.email, data.password);
      // if (mounted.current) {
      //   setStatus({ success: true });
      //   setSubmitting(false);
      // }
    } catch (err: any) {
      console.error(err);
      // if (mounted.current) {
      //   setStatus({ success: false });
      //   setErrors({ submit: err?.message });
      //   setSubmitting(false);
      // }
    }
  };
  console.log(errors);

  return (

    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
          Email address
        </label>
        <div className="mt-2">
          <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            type="email"
            autoComplete="email"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
            Password
          </label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Forgot password?
            </a>
          </div>
        </div>
        <div className="mt-2">
          <input {...register("password", { required: true })}
            type="password"
            placeholder="**********"
            autoComplete="current-password"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign in
        </button>
      </div>
    </form>
  );
}

export default LoginJWT;