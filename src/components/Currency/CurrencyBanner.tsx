import {useRouter} from "next/router";
import Image from "next/image";
import {useState} from "react";
import {useWindowSize} from "hooks/useWindowSize";

import {Share} from "@/assets/svg";

import {formatPercent, formatPrice} from "@/utils/converter";
import {copyToClipboard} from "@/utils/copyToClipboard";
import {textColorByNumber} from "@/utils/selectTextColor";

import Text from "@/components/shared/Text";

type ClipboardType = {
  copied: boolean;
  error: boolean;
  message: string;
};

const CurrencyBanner: React.FC<{currency: CurrencyByIdType}> = ({
  currency,
}: {
  currency: CurrencyByIdType;
}): JSX.Element => {
  const router = useRouter();
  const windowSize = useWindowSize();

  const [clipboard, setClipboard] = useState<ClipboardType>({
    copied: false,
    error: false,
    message: "",
  });

  const resetClipboard = () => {
    setTimeout(() => {
      setClipboard({copied: false, error: false, message: ""});
    }, 2000);
  };

  const handleCopy = async () => {
    try {
      await copyToClipboard(`${process.env.NEXT_PUBLIC_URL}${router.asPath}`);

      setClipboard({copied: true, error: false, message: "Copied to clipboard!"});

      resetClipboard();
    } catch (e) {
      if (e instanceof Error) {
        setClipboard({copied: false, error: true, message: e.message});
      }
      resetClipboard();
    }
  };

  return (
    <section className="relative col-start-1 col-end-3 md:col-end-3 row-start-1 row-end-2 flex items-center gap-x-4 p-2 py-3 sm:p-4 bg-black/10 dark:bg-slate-800/50">
      {currency?.image && (
        <Image src={currency?.image.large} alt={`Logo of ${currency?.name!}`} width={50} height={50} />
      )}

      <Text variant="h2" className="font-semibold">
        {currency?.name}
      </Text>
      <Text className="uppercase rounded-md bg-white/80 dark:bg-black/80 p-2">{currency?.symbol}</Text>
      <Text className="font-light">{formatPrice(currency?.market_data?.current_price?.usd)}</Text>

      {windowSize !== "mobile" && (
        <Text className={textColorByNumber(currency?.market_data?.price_change_percentage_24h)}>
          {formatPercent(currency?.market_data?.price_change_percentage_24h)}
        </Text>
      )}

      <button
        onClick={handleCopy}
        className="ml-auto outline-none active:scale-90 transition-transform"
        title="Share it with your friends"
      >
        <Share />
      </button>
      {/* This shows and [succes|error] message when required */}
      {(clipboard.copied || clipboard.error) && (
        <Text className={`absolute top-14 right-1 text-xs ${clipboard.copied ? "text-green-500" : "text-red-500"}`}>
          {clipboard.message}
        </Text>
      )}
    </section>
  );
};

export default CurrencyBanner;
