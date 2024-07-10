const initialState = {
    user: {},
    addressList: [],
    creditCards: [],
    roles: [],
    theme: '',
    language: '',
    fetchState: 'NOT_FETCHED',
  };
  
  const clientReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER':
        return { ...state, user: action.payload };
      case 'SET_ROLES':
        return { ...state, roles: action.payload };
      case 'SET_THEME':
        return { ...state, theme: action.payload };
      case 'SET_LANGUAGE':
        return { ...state, language: action.payload };
      case 'SET_FETCH_STATE':
        return { ...state, fetchState: action.payload };
      default:
        return state;
    }
  };
  
  export default clientReducer;
  