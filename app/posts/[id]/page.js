import React from "react";

const SinglePost = ({ params }) => {
  const { id } = params;
  return <div>Este es el post de : {id}</div>;
};

export default SinglePost;
