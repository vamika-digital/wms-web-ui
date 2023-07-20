import type { FC } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
// import useMounted from '../../hooks/useMounted';

interface ResigterUser {
  name: string,
  email: string,
  password: string,
  confirm_password: string,
  accept_terms: false
}

const RegisterJWT: FC = () => {
  const { register: registerUser } = useAuth() as any;
  
  const { register, handleSubmit, formState: { errors } } = useForm<ResigterUser>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
      accept_terms: false
    }
  });
  const onSubmit = async (data: ResigterUser) => {
    try {
      await registerUser(data.email, data.name, data.password);
      // if (mounted.current) {
      //   setStatus({ success: true });
      //   setSubmitting(false);
      // }
    } catch (err: any) {
      console.error(err);
      // setStatus({ success: false });
      // setErrors({ submit: err?.message });
      // setSubmitting(false);
    }
  };
  console.log(errors);

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
          Name
        </label>
        <div className="mt-2">
          <input {...register("name", { required: true })}
            autoComplete="name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
          Email Address
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
        </div>
        <div className="mt-2">
          <input {...register("password", { required: true })}
            type="password"
            placeholder="**********"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="confirm_password" className="block text-sm font-medium leading-6 text-gray-900">
            Confirm Password
          </label>
        </div>
        <div className="mt-2">
          <input {...register("confirm_password", { required: true })}
            type="password"
            placeholder="**********"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input {...register("accept_terms", { required: true })}
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-900">
            Accept Terms &amp; Conditions
          </label>
        </div>

        <div className="text-sm leading-6">
          <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Show
          </a>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Register Account
        </button>
      </div>
    </form>
  );
}

export default RegisterJWT;
