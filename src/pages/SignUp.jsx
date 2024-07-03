import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const baseURL = 'https://workintech-fe-ecommerce.onrender.com';

export default function Signup() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, watch } = useForm();
  const [error, setError] = useState('');
  const history = useHistory();

  const watchPassword = watch("password", "");

  const onSubmit = async (data) => {
    try {
      await axios.post(`${baseURL}/signup`, data);
      history.push('/login');
    } catch (err) {
      setError('Error signing up. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center mb-24">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full bg-sky-50 p-8">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Username</label>
          <input
            type="text"
            name="username"
            {...register("username", { required: true, minLength: 3 })}
            className="w-full px-3 py-2 border rounded"
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
          <label className="block text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            name="email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            className="w-full px-3 py-2 border rounded"
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
          <label className="block text-sm font-bold mb-2">Password</label>
          <input
            type="password"
            name="password"
            {...register("password", { 
              required: true,
              minLength: 8,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,}$/ })}
            className="w-full px-3 py-2 border rounded"
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
          <label className="block text-sm font-bold mb-2">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            {...register("confirmPassword", { validate: (value) => value === watchPassword })}
            className="w-full px-3 py-2 border rounded"
            required
          />
          {errors.confirmPassword && (
            <span className="text-red-500">Passwords do not match</span>
          )}
        </div>
        {/* Role selection */}
        {/* Use useEffect or similar to fetch roles and populate a dropdown */}
        {/* Example: */}
        {/* <select {...register("role_id")} className="w-full px-3 py-2 border rounded">
          <option value="customer">Customer</option>
          <option value="admin">Admin</option>
          <option value="store">Store</option>
        </select> */}
        {/* Additional fields for store role if selected */}
        {/* Conditionally render based on selected role */}
        {/* Submit button with spinner */}
        <button type="submit" disabled={isSubmitting} className={`w-full bg-blue-500 text-white py-2 rounded ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}>
          {isSubmitting ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
}
