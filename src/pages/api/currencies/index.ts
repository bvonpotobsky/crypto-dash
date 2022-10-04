import type {NextApiHandler, NextApiRequest, NextApiResponse} from "next";

interface ExtendedNextApiResponse extends NextApiResponse {
  json: (data: CurrencyType[]) => void;
}

const handler: NextApiHandler = async (req: NextApiRequest, res: ExtendedNextApiResponse) => {
  const {method} = req;

  if (method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }

  if (method === "GET") {
    try {
      const data = await fetch(
        `${process.env.COINGECKO_API_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5`,
      );
      const currencies: CurrencyByIdType = await data.json();

      res.status(200).json(currencies);
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).json({statusCode: 500, message: err.message});
      }

      res.status(500).json({statusCode: 500, message: "Something went wrong"});
    }
  }
};

export default handler;
