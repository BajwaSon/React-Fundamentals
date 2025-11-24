import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, fetching } = useContext(PostListData);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      <div className="row">
        {!fetching &&
          postList.map((post) => (
            <div className="col-md-6 col-xl-4">
              <Post key={post.id} post={post} />
            </div>
          ))}
      </div>
    </>
  );
};

export default PostList;
