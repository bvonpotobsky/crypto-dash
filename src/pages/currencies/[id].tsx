import {NextPage} from "next";
import {useRouter} from "next/router";

import RootLayout from "Layout";

import CurrencyBanner from "@/components/Currency/CurrencyBanner";
import CurrencyGraph from "@/components/Currency/CurrencyChart";
import CurrencyDescription from "@/components/Currency/CurrencyDescription";
import CurrencyMetrics from "@/components/Currency/CurrencyMetrics";

import MessageHandler from "@/components/shared/MessageHandler";

import useSWR, {Fetcher} from "swr";
const fetcher: Fetcher<CurrencyByIdType, string> = (url) => fetch(url).then((res) => res.json());

const CurrencyPage: NextPage = (): JSX.Element => {
  const router = useRouter();
  const {id} = router.query;

  const {data: currency, error} = useSWR(`/api/currencies/${id}`, fetcher);

  if (error) return <MessageHandler message="An error has ocurred!" />;
  if (!currency) return <MessageHandler message="Loading..." />;

  return (
    <RootLayout>
      <section className="w-full grid grid-cols-1 sm:grid-cols-2 gap-1 auto-rows-auto px-2">
        <CurrencyBanner currency={currency} />
        <CurrencyGraph id={currency?.id} />
        <CurrencyDescription name={currency?.name} description={currency?.description?.en} />
        <CurrencyMetrics currency={currency} />
      </section>
    </RootLayout>
  );
};

export default CurrencyPage;
