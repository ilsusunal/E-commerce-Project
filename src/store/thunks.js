import axios from 'axios';
import { setRoles, setFetchState } from './actions';

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
