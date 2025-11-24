import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElem = useRef();
  const postTitleElem = useRef();
  const postUserNameElem = useRef();
  const postReactionsElem = useRef();
  const postDescriptionElem = useRef();
  const postTagsElem = useRef();
  const postProfileUrlElem = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = userIdElem.current.value;
    const postTitle = postTitleElem.current.value;
    const postUserName = postUserNameElem.current.value;
    const postReactions = postReactionsElem.current.value;
    const postDescription = postDescriptionElem.current.value;
    const postTags = postTagsElem.current.value.split(" ");
    const postProfileUrl = postProfileUrlElem.current.value;

    userIdElem.current.value = "";
    postTitleElem.current.value = "";
    postUserNameElem.current.value = "";
    postReactionsElem.current.value = "";
    postDescriptionElem.current.value = "";
    postTagsElem.current.value = "";
    postProfileUrlElem.current.value = "";

    addPost(
      userId,
      postTitle,
      postUserName,
      postReactions,
      postDescription,
      postTags,
      postProfileUrl
    );
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
          <label htmlFor="inputEmail" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputEmail"
            ref={postUserNameElem}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputReactions" className="form-label">
            Post Reactions
          </label>
          <input
            type="tel"
            className="form-control"
            id="inputReactions"
            ref={postReactionsElem}
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
        <div className="col-md-6">
          <label htmlFor="inputProfileUrl" className="form-label">
            Post Profile URL
          </label>
          <input
            type="text"
            className="form-control"
            id="inputProfileUrl"
            ref={postProfileUrlElem}
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
