import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import BlogServices from "./BlogServices";
const initialState = {
  posts: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//create new post
export const createBlog = createAsyncThunk(
  "Create/post",
  async (postdata, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      console.log(postdata);
      return await BlogServices.createPost(postdata, token);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//get Blog post
export const getBlog = createAsyncThunk("get/post", async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await BlogServices.getPost(token);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
//update blog post
export const updateBlogPost = createAsyncThunk(
  "update/post",
  async (id, postdata, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await BlogServices.updatePost(id, postdata, token);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//delete blog post
export const deleteBlogPost = createAsyncThunk(
  "delete/post",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await BlogServices.deletePost(id, token);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const BlogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlog.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(getBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateBlogPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateBlogPost.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(updateBlogPost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteBlogPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteBlogPost.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(deleteBlogPost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = BlogSlice.actions;
export default BlogSlice;
