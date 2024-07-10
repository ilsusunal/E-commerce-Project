import axios from 'axios';
import { setRoles, setFetchState } from './actions/clientActions';
import { toast } from 'react-toastify';

export const fetchRoles = () => {
  return async (dispatch, getState) => {
    const { roles } = getState().client;
    if (roles.length === 0) {
      dispatch(setFetchState('FETCHING'));
      try {
        const response = await axios.get('https://workintech-fe-ecommerce.onrender.com/roles');
        const fetchedRoles = response.data.map(role => role.name); 
        dispatch(setRoles(fetchedRoles));
        dispatch(setFetchState('FETCHED'));
      } catch (error) {
        console.error('Failed to fetch roles:', error);
        dispatch(setFetchState('FAILED'));
      }
    }
  };
};

export const loginUser = (data, history, from) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('https://workintech-fe-ecommerce.onrender.com/login', {
        email: data.email,
        password: data.password,
      });

      const { user, token } = response.data;
      dispatch(setUser(user));

      if (data.rememberMe) {
        localStorage.setItem('token', token);
      }

      history.replace(from);
      toast.success('Successfully logged in!');
    } catch (error) {
      console.error('Login failed:', error);
      const errorMessage = error.response?.data?.message || 'Login failed!';
      toast.error(errorMessage);
    }
  };
};
