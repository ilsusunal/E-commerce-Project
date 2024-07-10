import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const baseURL = 'https://workintech-fe-ecommerce.onrender.com';

export default function Signup() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, watch, setValue } = useForm();
  const [error, setError] = useState('');
  const [roles, setRoles] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await axios.get(`${baseURL}/roles`);
        setRoles(response.data);
        if (response.data.length > 0) {
            setValue('role_id', response.data.find(role => role.code === 'customer').id);
        }
      } catch (err) {
        console.error('Error fetching roles:', err);
        setError('Error fetching roles. Please try again.');
      }
    };
    fetchRoles();
  }, [setValue]);

  const watchPassword = watch("password", "");
  const watchRole = watch("role_id");

  const onSubmit = async (data) => {
    setError('');
    let formattedData = {
      name: data.name,
      email: data.email,
      password: data.password,
      role_id: data.role_id
    };
    if (roles.find(role => role.id === parseInt(data.role_id))?.code === 'store') {
      formattedData.store = {
        name: data.store_name,
        phone: data.store_phone,
        tax_no: data.tax_no,
        bank_account: data.bank_account
      };
    }
    console.log('Data being sent:', formattedData);
    try {
      await axios.post(`${baseURL}/signup`, formattedData);
      history.push({
        pathname: history.location.state?.from || '/',
        state: { message: 'You need to click the link in the email to activate your account!' }
      });
    } catch (err) {
      setError('Error signing up. Please try again.');
    }
  };

  return (
    <main className="mb-24">
      <section className='flex flex-col items-center gap-4 mb-8'>
        <h1 className="text-baseText text-2xl font-bold">Hello!</h1>
        <p>Login to PazarYeri or create an account, don't miss the discounts!</p>
      </section>
      <section>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full bg-white py-10 px-10 rounded-2xl border-2">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <input
            type="text"
            name="username"
            {...register("username", { required: true, minLength: 3 })}
            className="w-full mb-4 md:mb-0 px-3 py-2 border border-gray-300 bg-stone-50 rounded"
            placeholder='Username *'
            required
          />
          {errors.username && errors.username.type === "required" && (
            <span className="text-red-500">Username is required</span>
          )}
          {errors.username && errors.username.type === "minLength" && (
            <span className="text-red-500">Username must be at least 3 characters</span>
          )}
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            className="w-full mb-4 md:mb-0 px-3 py-2 border border-gray-300 bg-stone-50 rounded"
            placeholder='Email *'
            required
          />
          {errors.email && errors.email.type === "required" && (
            <span className="text-red-500">Email is required</span>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <span className="text-red-500">Invalid email address</span>
          )}
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="password"
            {...register("password", { 
              required: true,
              minLength: 8,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,}$/ })}
            className="w-full mb-4 md:mb-0 px-3 py-2 border border-gray-300 bg-stone-50 rounded"
            placeholder='Password *'
            required
          />
          {errors.password && errors.password.type === "required" && (
            <span className="text-red-500">Password is required</span>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <span className="text-red-500">Password must be at least 8 characters</span>
          )}
          {errors.password && errors.password.type === "pattern" && (
            <span className="text-red-500">
              Password must include numbers, lowercase and uppercase letters, and special characters
            </span>
          )}
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="confirmPassword"
            {...register("confirmPassword", { validate: (value) => value === watchPassword })}
            className="w-full mb-4 md:mb-0 px-3 py-2 border border-gray-300 bg-stone-50 rounded"
            placeholder='Confirm Password *'
            required
          />
          {errors.confirmPassword && (
            <span className="text-red-500">Passwords do not match</span>
          )}
        </div>
        <div className="mb-4">
          <select {...register("role_id")} className="w-full mb-4 md:mb-0 px-3 py-2 border border-gray-300 bg-stone-50 rounded"
          placeholder='Full Name *'>
            {roles.map(role => (
              <option key={role.id} value={role.id}>{role.name}</option>
            ))}
          </select>
        </div>
        {/* Additional fields for store role if selected */}
        {watchRole && roles.find(role => role.id === parseInt(watchRole))?.code === 'store' && (
          <>
            <div className="mb-4">
              <input
                type="text"
                name="store_name"
                {...register("store_name", { required: true, minLength: 3 })}
                className="w-full mb-4 md:mb-0 px-3 py-2 border border-gray-300 bg-stone-50 rounded"
                placeholder='Store Name *'
                required
              />
              {errors.store_name && errors.store_name.type === "required" && (
                <span className="text-red-500">Store Name is required</span>
              )}
              {errors.store_name && errors.store_name.type === "minLength" && (
                <span className="text-red-500">Store Name must be at least 3 characters</span>
              )}
            </div>
            <div className="mb-4">
              <input
                type="tel"
                name="store_phone"
                {...register("store_phone", { required: true, pattern: /^(\+90|0)?5\d{9}$/ })}
                className="w-full mb-4 md:mb-0 px-3 py-2 border border-gray-300 bg-stone-50 rounded"
                placeholder='Store Phone *'
                required
              />
              {errors.store_phone && errors.store_phone.type === "required" && (
                <span className="text-red-500">Store Phone is required</span>
              )}
              {errors.store_phone && errors.store_phone.type === "pattern" && (
                <span className="text-red-500">Store Phone must be a valid Türkiye phone number</span>
              )}
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="tax_no"
                {...register("tax_no", { required: true, pattern: /^T\d{4}V\d{6}$/ })}
                className="w-full mb-4 md:mb-0 px-3 py-2 border border-gray-300 bg-stone-50 rounded"
                placeholder='Store Tax ID *'
                required
              />
              {errors.tax_no && errors.tax_no.type === "required" && (
                <span className="text-red-500">Store Tax ID is required</span>
              )}
              {errors.tax_no && errors.tax_no.type === "pattern" && (
                <span className="text-red-500">Store Tax ID must match the pattern “TXXXXVXXXXXX”</span>
              )}
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="bank_account"
                {...register("bank_account", { required: true, pattern: /^TR\d{24}$/ })}
                className="w-full mb-4 md:mb-0 px-3 py-2 border border-gray-300 bg-stone-50 rounded"
                placeholder='Store Bank Account *'
                required
              />
              {errors.bank_account && errors.bank_account.type === "required" && (
                <span className="text-red-500">Store Bank Account is required</span>
              )}
              {errors.bank_account && errors.bank_account.type === "pattern" && (
                <span className="text-red-500">Store Bank Account must be a valid IBAN address</span>
              )}
            </div>
          </>
        )}
        {/* Submit button */}
        <button type="submit" disabled={isSubmitting} className={`w-full bg-sky-400 text-white px-3 py-2 rounded hover:bg-darkbg ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}>
          {isSubmitting ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>
      </section>
    </main>
  );
}
