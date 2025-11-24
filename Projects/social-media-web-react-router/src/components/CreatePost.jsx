/* eslint-disable react-refresh/only-export-components */

import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  return (
    <div className="card p-4 my-3 mx-2">
      <Form method="post" className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputUserid" className="form-label">
            User ID
          </label>
          <input
            type="tel"
            className="form-control"
            id="inputUserid"
            name="userId"
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
            name="title"
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputReactions" className="form-label">
            Likes
          </label>
          <input
            type="number"
            className="form-control"
            id="inputReactions"
            name="likes"
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputDislikes" className="form-label">
            Dislikes
          </label>
          <input
            type="number"
            className="form-control"
            id="inputDislikes"
            name="dislikes"
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputDescription" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="inputDescription"
            placeholder="Write something..."
            name="body"
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputTag" className="form-label">
            Tags
          </label>
          <input
            type="text"
            className="form-control"
            id="inputTag"
            name="tags"
            placeholder="space separated"
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Save Post
          </button>
        </div>
      </Form>
    </div>
  );
};

// export async function createPostAction(data) {
//   const formData = await data.request.formData();
//   const postData = Object.fromEntries(formData);
//   postData.tags = postData.tags.split(" ");
//   postData.reactions = {
//     likes: Number(postData.likes),
//     dislikes: Number(postData.dislikes),
//   };

//   fetch("https://dummyjson.com/posts/add", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(postData),
//   })
//     .then((res) => res.json())
//     .then((post) => {
//       console.log(post);
//     });

//   return redirect("/");
// }

export async function createPostAction({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  postData.reactions = {
    likes: Number(postData.likes),
    dislikes: Number(postData.dislikes),
  };

  console.log("Sending data:", postData);

  const res = await fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  });

  const data = await res.json();
  console.log("Response:", data);

  return redirect("/");
}

export default CreatePost;
