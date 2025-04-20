import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const useridElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionsElement = useRef();
  const hashtagsElement = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      title: titleElement.current.value,
      body: bodyElement.current.value,
      reactions: reactionsElement.current.value,
      userid: useridElement.current.value,
      tags: hashtagsElement.current.value.split(" "),
    };

    addPost(newPost);

    (titleElement.current.value = ""),
      (bodyElement.current.value = ""),
      (reactionsElement.current.value = ""),
      (useridElement.current.value = ""),
      (hashtagsElement.current.value = "");
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userid" className="form-label">
          Enter your UserId here:
        </label>
        <input
          ref={useridElement}
          type="text"
          className="form-control"
          id="userid"
          placeholder="UserId..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="userid" className="form-label">
          Enter your Post Tile:
        </label>
        <input
          ref={titleElement}
          type="text"
          className="form-control"
          id="title"
          placeholder="Post Title..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="userid" className="form-label">
          Enter Post Content:
        </label>
        <textarea
          ref={bodyElement}
          rows="4"
          cols="50"
          type="text"
          className="form-control"
          id="body"
          placeholder="Post Content..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="userid" className="form-label">
          Number of Reactions:
        </label>
        <input
          ref={reactionsElement}
          type="text"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to your post..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="userid" className="form-label">
          Enter your hashtags here:
        </label>
        <input
          ref={hashtagsElement}
          type="text"
          className="form-control"
          id="hashtags"
          placeholder="Enter tags separated by space..."
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
