import React, { useRef } from "react";
import { useDispatch } from "react-redux";

import { createBlog } from "../../features/blogPost/BlogSlice";

const Blogpost = () => {
  const title = useRef();
  const description = useRef();
  const image = useRef();
  const dispatch = useDispatch();

  const formhandler = (e) => {
    e.preventDefault();
    const postData = {
      title: title.current.value,
      description: description.current.value,
      image: image.current.value,
    };
    dispatch(createBlog(postData));
  };
  return (
    <form onSubmit={formhandler} className="border p-4 shadow">
      <label htmlFor="title">Title</label>
      <input type="text" id="title" placeholder="title" ref={title} />
      <br />
      <label htmlFor="description">Description </label>
      <input
        type="text"
        id="description"
        placeholder="description"
        ref={description}
      />
      <br />
      <input type="text" id="image" ref={image} placeholder="image" />
      <button type="submit">add post</button>
    </form>
  );
};

export default Blogpost;
