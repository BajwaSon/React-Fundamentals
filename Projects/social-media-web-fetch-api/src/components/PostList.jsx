import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList, getAllFetchPosts } = useContext(PostListData);

  const handleFetchAllPosts = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        getAllFetchPosts(data.posts);
      });
  };

  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessage fetchAllPosts={handleFetchAllPosts} />
      )}
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

export default PostList;
