const githubReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
        return {
            ...state,
            users: action.payload,
            loading: false, // Set loading to false when data is fetched
        };
    case 'SET_LOADING':
        return {
            ...state,
            loading: true, // Set loading to true when fetching data
        };
    case 'CLEAR_USERS':
        return {
            ...state,
            users:[]
        };
    case 'GET_USER':
        return {
            ...state,
            user: action.payload,
            loading: false
        }


    default:
          return state;
  }
};

  export default githubReducer