import type {NextApiHandler, NextApiRequest, NextApiResponse} from "next";

interface ExtendedNextApiResponse extends NextApiResponse {
  json: (data: Currency) => void;
}

const handler: NextApiHandler = async (req: NextApiRequest, res: ExtendedNextApiResponse) => {
  const {method} = req;

  if (method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }

  const {id} = req.query;

  if (method === "GET") {
    try {
      const data = await fetch(`${process.env.API_BASE_URL}/coins/${id}?localization=false&developer_data=false`);
      const currency: Currency = await data.json();

      res.status(200).json(currency);
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).json({statusCode: 500, message: err.message});
      }

      res.status(500).json({statusCode: 500, message: "Something went wrong"});
    }
  }
};

export default handler;
