import {formatPrice, marketCapToBillons} from "@/utils/converter";
import dayjs from "dayjs";
import Text from "../shared/Text";

const CurrencyMetrics: React.FC<{currency: CurrencyByIdType}> = ({currency}): JSX.Element => {
  return (
    <div className="w-full col-start-1 col-end-3 lg:col-end-2 flex flex-col rounded overflow-hidden">
      <Text className="p-2 lg:py-2.5 text-left bg-black/10 dark:bg-slate-800/80">Metrics</Text>

      <ul className="w-full flex flex-col items-start justify-between bg-white dark:bg-slate-800/50 [&>*]:w-full [&>*]:p-2 lg:[&>*]:p-2.5 [&>*]:border-b dark:[&>*]:border-b-black">
        <li className="flex items-center justify-between">
          Price <span className="ml-auto">{formatPrice(currency?.market_data?.current_price?.usd)}</span>
        </li>
        <li className="flex items-center justify-between">
          Real Volume (24H)
          <span className="ml-auto">{marketCapToBillons(currency?.market_data?.total_volume.usd)}</span>
        </li>
        <li className="flex items-center justify-between">
          Market Cap <span className="ml-auto">${marketCapToBillons(currency?.market_data?.market_cap?.usd)}</span>
        </li>
        <li className="flex items-center justify-between">
          ATH <span className="ml-auto">{formatPrice(currency?.market_data?.ath?.usd)}</span>
        </li>
        <li className="flex items-center justify-between">
          ATH Date
          <span className="ml-auto">{dayjs(new Date(currency?.market_data?.ath_date?.usd)).format("DD/MM/YYYY")}</span>
        </li>
      </ul>
    </div>
  );
};

export default CurrencyMetrics;
