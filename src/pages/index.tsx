import type {NextPage} from "next";
import Link from "next/link";
import useSWR, {Fetcher, Key} from "swr";

const path: Key = "/api/currencies";
const fetcher: Fetcher<Currency[], string> = (url) => fetch(url).then((res) => res.json());

const Home: NextPage = () => {
  const {data: currencies, error} = useSWR(path, fetcher);

  return (
    <main className="w-full min-h-screen overflow-hidden border border-red-500">
      <h1>Hello World, let&rsquo;s decentralize the time-value of money!</h1>

      <ol className="w-full">
        {currencies?.map((currency: Currency) => (
          <li key={currency.id}>
            <Link href={`/currencies/${currency.id}`}>
              <a>{currency.name}</a>
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
};

export default Home;
