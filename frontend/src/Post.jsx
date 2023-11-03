import React from "react";

const Post = () => {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1698906211704/4ff6e135-f898-4c34-a214-77d3a943675a.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
          alt=""
        />
      </div>
      <div className="texts">
        <h2>Introduction to React createPortal API</h2>
        <p className="info">
          <a className="author">Praveen Raj</a>
          <time>4-11-2023 02:41</time>
        </p>
        <p className="summary">
          The createPortal API is part of the React DOM. You can use it to
          flexibly render the children of a React component in another location
          in the DOM. Though you can render a portal in another location, it
          still behaves like any other React child component.
        </p>
      </div>
    </div>
  );
};

export default Post;
