import {useState} from "react";
import useSWR, {Fetcher, Key} from "swr";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import MessageHandler from "./shared/MessageHandler";
import Text from "@/components/shared/Text";

const path: Key = "/api/news";
const fetcher: Fetcher<News[], string> = (url) => fetch(url).then((res) => res.json());

const NewsContainer: React.FC = (): JSX.Element => {
  const {data: news, error} = useSWR(path, fetcher);

  const [pagination, setPagination] = useState<{page: number; limit: number}>({page: 1, limit: 5});

  if (error) return <MessageHandler message="An error has ocurred!" />;
  if (!news) return <MessageHandler message="Loading..." />;

  const newsToRender = news.slice((pagination.page - 1) * pagination.limit, pagination.page * pagination.limit);

  return (
    <section className="relative md:col-span-3 rounded overflow-hidden">
      <div className="flex items-center justify-between p-2 lg:py-2.5 bg-black/10 dark:bg-slate-800/80">
        <Text variant="h3">Latest News</Text>
      </div>

      <ul className="flex flex-col">
        {newsToRender?.map((item, index) => (
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

      <div className="flex items-center justify-center gap-x-2 mt-2">
        <button
          className="py-1.5 px-2 bg-black/10 dark:bg-slate-800/80 disabled:opacity-50"
          onClick={() => setPagination((prev) => ({...prev, page: prev.page - 1}))}
          disabled={pagination.page === 1}
        >
          Prev
        </button>

        <button
          className="py-1.5 px-2 bg-black/10 dark:bg-slate-800/80 disabled:opacity-50"
          onClick={() => setPagination((prev) => ({...prev, page: prev.page + 1}))}
          disabled={pagination.page * pagination.limit >= news.length}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default NewsContainer;
