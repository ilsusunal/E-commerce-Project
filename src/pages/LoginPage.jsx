import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { loginUser } from '../store/thunks';

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: '/' } };
  
    const onSubmit = (data) => {
      dispatch(loginUser(data, history, from));
    };

    return (
        <main className="mb-24 mx-4">
            <section className='flex flex-col items-center gap-4 mb-8'>
                <h1 className="text-baseText text-2xl font-bold">Welcome Back!</h1>
            </section>
            <section>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full bg-white py-10 px-10 rounded-2xl border-2">
                    <div className="mb-4">
                        <input
                            type="email"
                            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                            className="w-full mb-4 md:mb-0 px-3 py-2 border border-gray-300 bg-stone-50 rounded"
                            placeholder='Email *'
                        />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            {...register('password', { required: true })}
                            className="w-full mb-4 md:mb-0 px-3 py-2 border border-gray-300 bg-stone-50 rounded"
                            placeholder='Password *'
                        />
                        {errors.password && <span>This field is required</span>}
                    </div>
                    <div className="mb-4 w-full">
                        <label>
                            <input
                                type="checkbox"
                                {...register('rememberMe')}
                            />
                            Remember Me
                        </label>
                    </div>
                    <button type="submit" className="w-full bg-sky-400 text-white px-3 py-2 rounded hover:bg-darkbg">
                        Login
                    </button>
                </form>
            </section>
        </main>
    );
};

export default LoginPage;
