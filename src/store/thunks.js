import axios from 'axios';
import { setRoles, setFetchState } from './actions/clientActions';

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

export const login = (data, history) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('https://workintech-fe-ecommerce.onrender.com/login', {
        email: data.email,
        password: data.password,
      });
      const user = response.data;

      if (data.rememberMe) {
        localStorage.setItem('token', user.token);
      }

      {/*const gravatarUrl = gravatar.url(user.email, { s: '200', d: 'identicon' });
      user.avatar = gravatarUrl;*/}

      dispatch(setUser(user));

      const previousPage = history.location.state?.from || '/';
      history.push(previousPage);
    } catch (error) {
      console.error('Login failed:', error);
      toast.error('Login failed. Please check your email and password.');
    }
  };
};
