import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import Blog from "./Blog";
import "../assets/app.css";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div>
      <Header name ={blogData.name} />
      <About  image ={blogData.image} about= {blogData.about} />
      <ArticleList posts = {blogData.posts} />
    </div>
  );
}

export default App;
