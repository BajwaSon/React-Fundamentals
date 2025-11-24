/* eslint-disable react-refresh/only-export-components */
import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const postList = useLoaderData();
  return (
    <>
      {postList.length === 0 && <WelcomeMessage />}
      <div className="row">
        {postList.map((post) => (
          <div className="col-md-6 col-xl-4">
            <Post key={post.id} post={post} />
          </div>
        ))}
      </div>
    </>
  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
