import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElem = useRef();
  const postTitleElem = useRef();
  const postLikeElem = useRef();
  const postDislikeElem = useRef();
  const postDescriptionElem = useRef();
  const postTagsElem = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = userIdElem.current.value;
    const postTitle = postTitleElem.current.value;
    const postLike = postLikeElem.current.value;
    const postDislike = postDislikeElem.current.value;
    const postDescription = postDescriptionElem.current.value;
    const postTags = postTagsElem.current.value.split(" ");

    userIdElem.current.value = "";
    postTitleElem.current.value = "";
    postLikeElem.current.value = "";
    postDislikeElem.current.value = "";
    postDescriptionElem.current.value = "";
    postTagsElem.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: userId,
        title: postTitle,
        reactions: {
          likes: postLike,
          dislikes: postDislike,
        },
        body: postDescription,
        tags: postTags,
      }),
    })
      .then((res) => res.json())
      .then((post) => addPost(post));
  };

  return (
    <div className="card p-4 my-3 mx-2">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="inputUserid" className="form-label">
            User ID
          </label>
          <input
            type="tel"
            className="form-control"
            id="inputUserid"
            ref={userIdElem}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputTitle" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            id="inputTitle"
            ref={postTitleElem}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputReactions" className="form-label">
            How many people Like
          </label>
          <input
            type="number"
            className="form-control"
            id="inputReactions"
            ref={postLikeElem}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputReactions" className="form-label">
            How many people Disike
          </label>
          <input
            type="number"
            className="form-control"
            id="inputReactions"
            ref={postDislikeElem}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Post Description
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Tell me about yourself..."
            ref={postDescriptionElem}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputTag" className="form-label">
            Post Tags
          </label>
          <input
            type="text"
            className="form-control"
            id="inputTag"
            ref={postTagsElem}
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Save Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
