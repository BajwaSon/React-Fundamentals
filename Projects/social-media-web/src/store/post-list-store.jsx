/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (
    userId,
    postTitle,
    postUserName,
    postReactions,
    postDescription,
    postTags,
    postProfileUrl
  ) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        userId: userId,
        title: postTitle,
        userName: postUserName,
        reaction: postReactions,
        body: postDescription,
        tags: postTags,
        profilePic: postProfileUrl,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Dubai",
    userName: "Bajwa Mandeep",
    body: "Hi Friends, am now going to Dubai for my vacations. Hope to enjoy a lot. Peace out.",
    reaction: 2,
    userId: "user-13",
    tags: ["Vacation", "Dubai", "Enjoying"],
    profilePic:
      "https://i.pinimg.com/1200x/e1/ed/25/e1ed25abbd3fd7a94f0d6e9e5370bdc3.jpg",
  },
  {
    id: "2",
    title: "Life is Easy!",
    userName: "Bajwa Mandeep",
    body: "Hi Friends, don't take too much stress, Life is so easy.",
    reaction: 10,
    userId: "user-02",
    tags: ["Quotes", "Life", "Emptions"],
    profilePic:
      "https://i.pinimg.com/736x/04/19/3c/04193c03f0be5e0cc315edf35716e8a0.jpg",
  },
  {
    id: "3",
    title: "Free Time, Play Game",
    userName: "Bajwa Mandeep",
    body: "Hi Friends, In free time we play games.",
    reaction: 2,
    userId: "user-13",
    tags: ["Games", "Time", "Enjoying"],
    profilePic:
      "https://i.pinimg.com/1200x/2a/9b/47/2a9b4707f3b5fe98c0160d2255a0bb20.jpg",
  },
];

export default PostListProvider;
