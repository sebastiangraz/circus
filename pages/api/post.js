// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

import { createClient } from "edgedb";
import { NextApiRequest, NextApiResponse } from "next";

export const client = createClient();

export default async function handler(req, res) {
  const posts = await client.query(`select BlogPost {
    id,
    title,
    content
  };`);
  res.status(200).json(posts);
}
