import {NextPage} from "next";
import {useRouter} from "next/router";
import useSWR, {Fetcher} from "swr";

const fetcher: Fetcher<Currency, string> = (url) => fetch(url).then((res) => res.json());

const CurrencyPage: NextPage = () => {
  const router = useRouter();
  const {id} = router.query;

  const {data: currency, error} = useSWR(`/api/currencies/${id}`, fetcher);

  return (
    <div>
      <h3>Currency: {currency?.name}</h3>
    </div>
  );
};

export default CurrencyPage;
