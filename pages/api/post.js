// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

import { createClient } from "edgedb";
import { NextApiRequest, NextApiResponse } from "next";

export const client = createClient();

export default async function handler(req, res) {
  const id = req.query.id;

  if (req.method === "GET") {
    const posts = await client.query(`select BlogPost {
    id,
    title,
    content
  };`);
    return res.status(200).json(posts);
  }

  if (req.method === "POST") {
    await client.query(
      "insert BlogPost { title := <str>$title, content := <str>$content };",
      {
        title: req.body.data.title,
        content: req.body.data.content,
      }
    );
    return res.status(200).send("Success");
  }

  // if (req.method === "DELETE") {
  //   console.log(req.body.data.title, "LELKEK DELETE");
  //   await client.queryJSON(`delete BlogPost FILTER .id = <uuid>$id;`, {
  //     id,
  //   });
  //   return res.status(200).send("Success");
  // }

  return res.status(400);
}
