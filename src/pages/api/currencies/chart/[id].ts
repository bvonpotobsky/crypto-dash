import type {NextApiHandler, NextApiRequest, NextApiResponse} from "next";

interface ExtendedNextApiResponse extends NextApiResponse {
  json: (body: CurrencyChartType) => void;
}

const handler: NextApiHandler = async (req: NextApiRequest, res: ExtendedNextApiResponse) => {
  const {method} = req;

  if (method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }

  const {id, days} = req.query;

  if (method === "GET") {
    try {
      const data = await fetch(
        `${process.env.COINGECKO_API_URL}/coins/${id}/market_chart?vs_currency=usd&days=${days}`,
      );
      const currency: CurrencyChartType = await data.json();

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
