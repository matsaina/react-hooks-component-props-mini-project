import React from "react";

function Article({ title, date, preview, minutes }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{date}</p>
      <p>{preview}</p>
      <p>{minutes}</p>
    </div>
  );
}

export default Article;
