export const selectOnePost = (payload) => {
  return {
    type: "select-one-news",
    payload: payload,
  };
};

export const startLoadingSinglePost = () => {
  return {
    type: "start-loading-single-post",
  };
};
