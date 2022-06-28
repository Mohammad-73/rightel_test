import axios from "axios";

const apiKey = "ab782a5e119d4c3881ea62ebbaca2363";

const url =
  "https://newsapi.org/v2/everything?" +
  "from=2022-06-27&" +
  "sortBy=publishedAt&" +
  "apiKey=ab782a5e119d4c3881ea62ebbaca2363";

export const startLoading = () => {
  return {
    type: "start-loading",
  };
};

export const searchQuery = (payload) => {
  return {
    type: "search-query",
    payload: payload,
  };
};

export function loadPosts(query) {
  return async (dispatch) => {
    function onSuccess(success) {
      dispatch({ type: "load-posts", payload: success });
      return success;
    }
    function onError(error) {
      dispatch({ type: "load-error", error });
      return error;
    }
    try {
      const success = await axios.get(`${url}&q=${query || "apple"}`);
      return onSuccess(success);
    } catch (error) {
      return onError(error);
    }
  };
}
