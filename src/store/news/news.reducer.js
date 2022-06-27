const initialState = {
  loading: false,
  items: [],
  error: false,
};
function newsReducer(state = initialState, action) {
  switch (action.type) {
    case "load-posts": {
      return { ...state, items: action.payload, loading: false, error: false };
    }
    case "start-loading": {
      return { ...state, loading: true, error: false };
    }
    case "load-error": {
      return { ...state, error: true };
    }

    default:
      return state;
  }
}

export default newsReducer;
