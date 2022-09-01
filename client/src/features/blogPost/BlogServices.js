import axios from "axios";
const API_URL = "http://localhost:5000/blog";

//create Blog post
const createPost = async (blogdata, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, blogdata, config);

  return response.data;
};
//get blog post
const getPost = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};
//update blog post
const updatePost = async (postId, postData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.patch(API_URL + postId, postData, config);
  return response.data;
};

//delete Blog post
const deletePost = async (postId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + postId, config);
  return response.data;
};

const BlogServices = {
  getPost,
  createPost,
  updatePost,
  deletePost,
};

export default BlogServices;
