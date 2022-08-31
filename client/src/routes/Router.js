import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import Editor from "../pages/Editor";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/editor" element={<Editor />} />
    </Routes>
  );
};

export default Router;
