import axios from "axios";

export function loadPosts() {
  return async (dispatch) => {
    function onSuccess(success) {
      dispatch({ type: "load-posts", payload: success });
      return success;
    }
    function onError(error) {
      dispatch({ type: "start-loading", error });
      return error;
    }
    try {
      const success = await axios.get("https://api.bourseon.com/posts");
      return onSuccess(success);
    } catch (error) {
      return onError(error);
    }
  };
}
