import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card my-3 mx-2">
      <div className="card-body">
        <h6 className="card-subtitle mb-2">User ID: {post.userId}</h6>
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger cursor-pointer"
            onClick={() => deletePost(post.id)}
          >
            <AiFillDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        <div className="badges-list">
          {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary me-2">
              {tag}
            </span>
          ))}
        </div>
        <div className="alert alert-primary m-0 mt-3 p-2" role="alert">
          This post has been reacted by{" "}
          {post.reactions.likes + post.reactions.dislikes} peoples.
        </div>
        <div className="reactions-list d-flex gap-2 mt-3">
          <button type="button" class="btn btn-secondary">
            👁️<span class="badge">{post.views}</span>
          </button>
          <button type="button" class="btn btn-success">
            👍<span class="badge">{post.reactions.likes}</span>
          </button>
          <button type="button" class="btn btn-danger">
            👎<span class="badge">{post.reactions.dislikes}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
