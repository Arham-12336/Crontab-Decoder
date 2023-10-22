import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return res.status(200).json({
    message: "hello",
  });
  //   const { question } = req.body;
  //   console.log("questions: ", question);
  //   if (!question) {
  //     return res.status(200).json({
  //       data: "FUCK YOU",
  //     });
  //   }
}
