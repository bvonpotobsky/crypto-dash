import Text from "@/components/shared/Text";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import useSWR, {Fetcher, Key} from "swr";
import MessageHandler from "./shared/MessageHandler";

const path: Key = "/api/news";
const fetcher: Fetcher<{data: News[]; total_pages: number}, string> = (url) => fetch(url).then((res) => res.json());

const NewsContainer: React.FC = (): JSX.Element => {
  const {data: news, error} = useSWR(path, fetcher);

  if (error) return <MessageHandler message="An error has ocurred!" />;
  if (!news) return <MessageHandler message="Loading..." />;

  return (
    <section className="relative md:col-span-3 rounded overflow-hidden">
      <div className="flex items-center justify-between p-2 lg:py-2.5 bg-black/10 dark:bg-slate-800/80">
        <Text variant="h3">Latest News</Text>
      </div>

      <ul className="flex flex-col">
        {news?.data?.map((item, index) => (
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
