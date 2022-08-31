import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/Auth/AuthSlice";
import BlogSlice from "../features/blogPost/BlogSlice";
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    Blog: BlogSlice.reducer,
  },
});

export default store;
