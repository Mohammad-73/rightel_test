const initialState = {
  loading: false,
  items: [],
};
function newsReducer(state = initialState, action) {
  switch (action.type) {
    case "load-posts": {
      return { ...state, items: action.payload, loading: false };
    }
    case "start-loading": {
      return { ...state, loading: true };
    }

    default:
      return state;
  }
}

export default newsReducer;
