import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/index";
import Post from "./pages/post/index";
import Board from "./pages/board/index";
import About from "./pages/about/index";
import RouteChangeTracker from "./RouteChangeTracker";

const routing = (props) => {
  RouteChangeTracker();

  return (
    <Routes>
      <Route path="/" exact element={<Board />}></Route>
      <Route path="/artists" element={<Landing />}></Route>
      <Route path="/post/:post_id" element={<Post />}></Route>
      <Route path="/about" exact element={<About />}></Route>
    </Routes>
  );
};

export default routing;
