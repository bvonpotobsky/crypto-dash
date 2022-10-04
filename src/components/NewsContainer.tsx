import Text from "@/components/shared/Text";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import useSWR, {Fetcher, Key} from "swr";

const path: Key = "/api/news";
const fetcher: Fetcher<{data: News[]; total_pages: number}, string> = (url) => fetch(url).then((res) => res.json());

const NewsContainer: React.FC = (): JSX.Element => {
  // const {data: news, error} = useSWR(path, fetcher);
  const data = [
    {
      news_url: "https://www.coindesk.com/coinbase-ipo-valuation",
      image_url: "https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707",
      title: "Coinbase IPO Valuation Could Hit $100 Billion, Analyst Says",
      text: "Coinbase's valuation could hit $100 billion in its upcoming IPO, according to one analyst.",
      source_name: "CoinDesk",
      date: "2022-10-04T01:00:00+00:00",
      topics: ["Coinbase", "IPO"],
      sentiment: "Positive",
      type: "Article",
    },
    {
      news_url: "https://www.coindesk.com/coinbase-ipo-valuation",
      image_url: "https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707",
      title: "Coinbase IPO Valuation Could Hit $100 Billion, Analyst Says",
      text: "Coinbase's valuation could hit $100 billion in its upcoming IPO, according to one analyst.",
      source_name: "CoinDesk",
      date: "2022-10-04T01:00:00+00:00",
      topics: ["Coinbase", "IPO"],
      sentiment: "Positive",
      type: "Article",
    },
    {
      news_url: "https://www.coindesk.com/coinbase-ipo-valuation",
      image_url: "https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707",
      title: "Coinbase IPO Valuation Could Hit $100 Billion, Analyst Says",
      text: "Coinbase's valuation could hit $100 billion in its upcoming IPO, according to one analyst.",
      source_name: "CoinDesk",
      date: "2022-10-04T01:00:00+00:00",
      topics: ["Coinbase", "IPO"],
      sentiment: "Positive",
      type: "Article",
    },
  ];

  return (
    <section className="md:col-span-3 rounded overflow-hidden">
      <div className="flex items-center justify-between p-2 lg:py-2.5 bg-black/10 dark:bg-slate-800/80">
        <Text variant="h3">Latest News</Text>
      </div>

      <ul className="flex flex-col">
        {data?.map((item, index) => (
          <li
            key={index}
            className="w-full grid grid-cols-6 auto-rows-auto p-1 py-2 border-b-2 border-black/10 dark:border-slate-800/80"
          >
            <a
              href={item.news_url}
              className="col-span-6 row-start-1 row-auto font-bold text-[14px] lg:text-lg hover:underline"
            >
              {item.title}
            </a>

            <Text truncate lines="8" className="col-span-6 row-start-2 my-2 font-medium">
              {item.text}
            </Text>
            <Text className="row-start-3 col-span-3 row text-xs first-letter:uppercase">
              {dayjs(new Date(item.date)).fromNow()}
            </Text>
            <Text className="row-start-3 col-span-3 place-self-end font-light">{item.source_name}</Text>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NewsContainer;
