import type {NextApiHandler, NextApiRequest, NextApiResponse} from "next";

import {news} from "@/utils/data";

interface ExtendedNextApiResponse extends NextApiResponse {
  json: (data: News[]) => void;
}

const handler: NextApiHandler = async (req: NextApiRequest, res: ExtendedNextApiResponse) => {
  const {method} = req;

  if (method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }

  if (method === "GET") {
    try {
      // This has been comented because the API is paid.
      // I scraped the data and saved it in a file for demo purposes.

      // const data = await fetch(
      //   `${process.env.CRYPTO_NEWS_API_URL}/category?section=general&items=3&page=5&token=${process.env.CRYPTO_NEWS_API_KEY}`,
      // );
      // const news: News[] = await data.json();

      res.status(200).json(news);
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).json({statusCode: 500, message: err.message});
      }

      res.status(500).json({statusCode: 500, message: "Something went wrong"});
    }
  }
};

export default handler;
