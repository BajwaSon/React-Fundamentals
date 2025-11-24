/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, getAllFetchPosts } = useContext(PostListData);

  const [fetching, setFetching] = useState(false);

  // Fetch Posts From API Using useEffect Hook
  useEffect(() => {
    setFetching(true);

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        getAllFetchPosts(data.posts);
        setFetching(false);
      });
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      <div className="row">
        {!fetching &&
          postList.map((post) => (
            <div className="col-md-6 col-xl-4">
              <Post key={post.id} post={post} />{" "}
            </div>
          ))}
      </div>
    </>
  );
};

export default PostList;
