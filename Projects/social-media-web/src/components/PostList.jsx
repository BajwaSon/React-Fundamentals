import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";

const PostList = () => {
  const { postList } = useContext(PostListData);
  return (
    <>
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
