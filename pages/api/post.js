import { createClient } from "edgedb";
import e from "../../dbschema/edgeql-js";
export const client = createClient();

const getPosts = e.select(e.BlogPost, () => ({
  id: true,
  title: true,
  content: true,
}));

export default async function handler(req, res) {
  const id = req.body;

  const posts = await getPosts.run(client);

  if (req.method === "GET") {
    return res.status(200).json(posts);
  }

  if (req.method === "POST") {
    const insert = e.insert(e.BlogPost, {
      title: req.body.data.title,
      content: req.body.data.content,
    });
    return res.status(200).json(await insert.run(client));
  }

  if (req.method === "DELETE") {
    return await e
      .delete(e.BlogPost, (post) => ({
        filter: e.op(post.id, "=", e.uuid(id)),
      }))
      .run(client);
  }

  return res.status(400);
}
