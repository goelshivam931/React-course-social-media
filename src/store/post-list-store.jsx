import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;

  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload.newPost, ...currPostList];
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POSTLIST
  );

  const addPost = (newPost) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        newPost,
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
    <PostList.Provider
      value={{ postList: postList, addPost: addPost, deletePost: deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POSTLIST = [
  {
    id: "1",
    title: "Going to Delhi",
    body: "Hi All, I am going to Delhi",
    reactions: 4,
    userid: "user-4",
    tags: ["Delhi", "Enjoying"],
  },

  {
    id: "2",
    title: "Going to Mumbai",
    body: "Hi All, I am going to Mumbai",
    reactions: 3,
    userid: "user-6",
    tags: ["Mumbai", "Enjoying"],
  },
];

export default PostListProvider;
