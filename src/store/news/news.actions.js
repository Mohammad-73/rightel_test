export function loadPosts() {
  return async (dispatch) => {
    const stream = await fetch("https://api.bourseon.com/posts");
    const { posts } = await stream.json();
    console.log("log>", posts);
    dispatch({
      type: "load-posts",
      payload: posts,
    });
  };
}
