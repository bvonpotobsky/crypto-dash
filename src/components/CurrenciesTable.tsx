import Image from "next/image";
import Link from "next/link";
import useSWR, {Fetcher, Key} from "swr";

import {formatPercent, formatPrice, marketCapToBillons} from "@/utils/converter";

const path: Key = "/api/currencies";
const fetcher: Fetcher<Currency[], string> = (url) => fetch(url).then((res) => res.json());

const CurrenciesTable = () => {
  const {data: currencies, error} = useSWR(path, fetcher, {
    refreshInterval: 1000 * 60,
    revalidateOnFocus: true,
  });

  // TODO: Add a loading state
  if (error) return <div>failed to load</div>;

  return (
    <div className="row-start-1 row-end-2 col-start-auto col-end-auto text-sm bg-slate-800/50 rounded overflow-hidden">
      <div className="flex items-center justify-between p-2">
        <h3>Top 5 crypto currencies by Market Cap</h3>
      </div>
      <table className="w-full p-2 table-auto">
        <thead className="w-full border-y border-y-black">
          <tr className="w-full [&>*]:p-2 [&>*]:font-semibold text-slate-400">
            <th className="w-12 text-center border-r border-r-black">#</th>
            <th className="text-left border-r border-r-black">Asset</th>
            <th className="w-20 sm:w-24 text-right border-r border-r-black">Price</th>
            <th className="hidden xs:table-cell w-20 sm:w-24 text-right border-r border-r-black">1H</th>
            <th className="w-20 sm:w-24 text-right">Mcap</th>
          </tr>
        </thead>

        <tbody className="w-full overflow-hidden font-light">
          {currencies?.map((currency) => (
            <CurrencyRow currency={currency} key={currency.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrenciesTable;

const CurrencyRow = ({currency}: {currency: Currency}) => {
  return (
    <tr className="[&>*]:p-2 border-b border-b-black">
      <td className="text-center">{currency.market_cap_rank}</td>
      <td className="text-left">
        <Link href={`/currencies/${currency.id}`}>
          <a className="flex items-center gap-x-2">
            <Image src={currency.image!} alt={`Logo of ${currency.name!}`} width={16} height={16} />
            <span>{currency.name}</span>
          </a>
        </Link>
      </td>
      <td className="text-right">{formatPrice(currency.current_price)}</td>
      <td className="hidden xs:table-cell text-right">{formatPercent(currency.price_change_percentage_24h)}</td>
      <td className="text-right">{marketCapToBillons(currency.market_cap)}</td>
    </tr>
  );
};
