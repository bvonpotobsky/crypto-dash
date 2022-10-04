import {useState} from "react";
import dayjs from "dayjs";

import {formatPrice, formatPriceChart} from "@/utils/converter";
import {AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid} from "recharts";

import Text from "@/components/shared/Text";
import MessageHandler from "@/components/shared/MessageHandler";

import useSWR, {Fetcher} from "swr";
const fetcher: Fetcher<CurrencyChartType, string> = (url) => fetch(url).then((res) => res.json());

// 1 day, 1 month, 6 months, 1 year and 5 years
type Days = "1" | "30" | "180" | "365" | "1825";

const CurrencyChart: React.FC<{id: CurrencyByIdType["id"]}> = ({id}: {id: CurrencyByIdType["id"]}): JSX.Element => {
  const [days, setDays] = useState<Days>("180");

  const {data: currency, error} = useSWR(`/api/currencies/chart/${id}?days=${days}`, fetcher);

  if (error) return <MessageHandler message="An error has ocurred!" />;
  if (!currency) return <MessageHandler message="Loading..." />;

  return (
    <section className="w-full col-start-1 col-end-3 md:col-end-2 lg:col-end-3 row-start-2 flex flex-col shadow-sm rounded">
      <div className="flex items-center justify-between rounded-t bg-black/10 dark:bg-slate-800/50">
        <Text className="p-2 lg:py-2.5">Chart</Text>

        <select
          className="border-l border-l-black/10 bg-transparent outline-none px-1"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setDays(e.target.value as Days)}
          defaultValue={days}
        >
          <option value="1">1 day</option>
          <option value="30">1 month</option>
          <option value="180">6 months</option>
          <option value="365">1 year</option>
          <option value="1825">5 years</option>
        </select>
      </div>

      {currency.prices ? (
        <ResponsiveContainer width="100%" height={400} className="text-xs">
          <AreaChart data={currency?.prices?.map((price) => ({date: price[0], price: price[1]}))}>
            <defs>
              <linearGradient id="color" x1="0" y1="1" x2="0" y2="1">
                <stop offset="0%" stopColor="#1e293b" stopOpacity={0.4} />
                <stop offset="75%" stopColor="#1e293b" stopOpacity={0.1} />
              </linearGradient>
            </defs>

            <Area dataKey="price" stroke="#1e293b" strokeWidth={2} fill="url(#color)" />
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              width={100}
              tickFormatter={(tick) => {
                if (days === "1") return dayjs(tick).format("HH:mm");
                return dayjs(tick).format("DD MMM");
              }}
            />
            <YAxis
              orientation="right"
              dataKey="price"
              axisLine={false}
              tickLine={false}
              tickCount={currency?.prices?.length > 10 ? currency?.prices?.length / 10 : currency?.prices?.length}
              tickFormatter={(value) => formatPriceChart(value)}
            />
            <Tooltip content={<CustomTooltip />} />
            <CartesianGrid opacity={0.1} vertical={false} />
          </AreaChart>
        </ResponsiveContainer>
      ) : null}
    </section>
  );
};

const CustomTooltip = ({active, payload, label}: any) => {
  if (active) {
    return (
      <div className="bg-white rounded-md p-2 shadow-md">
        <p className="text-gray-500 text-xs">{dayjs(label).format("ddd DD MMM")}</p>
        <p className="text-gray-900 text-sm">{formatPrice(payload[0].value)} USD</p>
      </div>
    );
  }
  return null;
};

export default CurrencyChart;
