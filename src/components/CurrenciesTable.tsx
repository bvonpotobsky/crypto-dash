import Image from "next/image";
import Link from "next/link";

import {formatPercent, formatPrice, marketCapToBillons} from "@/utils/converter";
import {textColorByNumber} from "@/utils/selectTextColor";

import useSWR, {Fetcher, Key} from "swr";
import MessageHandler from "./shared/MessageHandler";

const path: Key = "/api/currencies";
const fetcher: Fetcher<CurrencyType[], string> = (url) => fetch(url).then((res) => res.json());

const TABLE_HEADERS = [
  {label: "#", className: "w-12 text-center border-r dark:border-r-black"},
  {label: "Asset", className: "text-left border-r dark:border-r-black"},
  {label: "Price", className: "w-20 sm:w-24 text-right border-r dark:border-r-black"},
  {label: "1h", className: "hidden xs:table-cell w-20 sm:w-24 text-right border-r dark:border-r-black"},
  {label: "MCap", className: "w-20 sm:w-24 text-right"},
];

const CurrenciesTable: React.FC = (): JSX.Element => {
  const {data: currencies, error} = useSWR(path, fetcher, {
    refreshInterval: 1000 * 60,
    revalidateOnFocus: true,
  });

  if (error) return <MessageHandler message="An error has ocurred!" />;
  if (!currencies) return <MessageHandler message="Loading..." />;

  return (
    <div className="w-full md:w-[99.5%] md:justify-self-start col-start-auto md:col-end-2 bg-white dark:bg-slate-800/50 rounded overflow-hidden">
      <table className="w-full p-2 table-auto">
        <caption className="p-2 text-left bg-black/10 dark:bg-slate-800/80">
          Top 5 crypto currencies by Market Cap
        </caption>
        <thead className="w-full border-y dark:border-y-black">
          <tr className="w-full [&>*]:p-2 lg:[&>*]:p-2.5 [&>*]:font-semibold dark:text-slate-400">
            {TABLE_HEADERS.map((header, index) => (
              <th key={index} className={header.className}>
                {header.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="w-full overflow-hidden font-light">
          {currencies.length ? (
            currencies?.map((currency) => <CurrencyRow currency={currency} key={currency.id} />)
          ) : (
            <tr className="relative [&>*]:p-2 lg:[&>*]:p-2.5 border-b dark:border-b-black hover:dark:bg-slate-800/80">
              <td className="flex items-center justify-center text-center border-r dark:border-r-black">
                <div className="w-6 h-6 rounded-full bg-slate-800/50 animate-pulse" />
              </td>

              <td>No data</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CurrenciesTable;

const CurrencyRow = ({currency}: {currency: CurrencyType}) => {
  return (
    <tr className="[&>*]:p-2 lg:[&>*]:p-2.5 border-b dark:border-b-black hover:dark:bg-slate-800/80">
      <td className="text-center">{currency.market_cap_rank}</td>
      <td className="text-left">
        <Link href={`/currencies/${currency.id}`}>
          <a className="inline-flex items-center gap-x-2 hover:underline">
            <Image src={currency.image!} alt={`Logo image of ${currency.name!}`} width={17} height={17} />
            <span>{currency.name}</span>
          </a>
        </Link>
      </td>
      <td className="text-right">{formatPrice(currency.current_price)}</td>
      <td className={`hidden xs:table-cell text-right ${textColorByNumber(currency?.price_change_percentage_24h)}`}>
        {formatPercent(currency.price_change_percentage_24h)}
      </td>
      <td className="text-right">{marketCapToBillons(currency.market_cap)}</td>
    </tr>
  );
};
