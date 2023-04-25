import React from "react";
import Article from "./Article";
function ArticleList({ posts }) {
  return (
    <div>
      {posts.map((post) => {
        let mins;

        if (post.minutes < 3) {
          mins = 2;
        } else if (post.minutes < 7) {
          mins = 3;
        } else {
          mins = 7;
        }

        return (
          <>
            <Article
              title={post.title}
              date={post.date}
              preview={post.preview}
              minutes={post.minutes}
            />
          </>
        );
      })}
    </div>
  );
}

export default ArticleList;
