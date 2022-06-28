const initialState = {
  loading: false,
  error: false,
  post: {
    source: { id: "", name: "" },
    author: "",
    title: "",
    description: "",
    url: "",
    urlToImage: "",
    publishedAt: "",
    content: "",
  },
};

function singlePageNewsReducer(state = initialState, action) {
  switch (action.type) {
    case "select-one-news": {
      return { ...state, post: action.payload, loading: false };
    }
    case "start-loading-single-post": {
      return {
        ...state,
        loading: true,
      };
    }
    default:
      return state;
  }
}

export default singlePageNewsReducer;
