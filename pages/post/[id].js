import React from "react";

import { client } from "../api/post";
import e from "../../dbschema/edgeql-js";

export const getServerSideProps = async (context) => {
  console.log(context.params.id);
  const post = await e
    .select(e.BlogPost, (post) => ({
      id: true,
      title: true,
      content: true,
      filter: e.op(post.title, "=", e.str(context.params.id)),
    }))
    .run(client);
  return { props: { post: post } };
};

const Post = (props) => {
  console.log(props);
  const { title, content } = props.post;
  return (
    <div
      style={{
        margin: "auto",
        width: "100%",
        maxWidth: "600px",
      }}
    >
      <h1 style={{ padding: "50px 0px" }}>{title}</h1>
      <p style={{ color: "#666" }}>{content}</p>
    </div>
  );
};

export default Post;
