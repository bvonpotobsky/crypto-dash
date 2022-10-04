import type {NextPage} from "next";

import RootLayout from "Layout";

import CurrenciesTable from "@/components/CurrenciesTable";
import NewsContainer from "@/components/NewsContainer";

const Home: NextPage = (): JSX.Element => {
  return (
    <RootLayout>
      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-1 px-2 md:px-4">
        <CurrenciesTable />
        <div className="w-full md:w-[99.5%] md:justify-self-end col-start-1 md:col-start-2 col-end-auto bg-slate-800/50 rounded overflow-hidden">
          2
        </div>
        <NewsContainer />
      </section>
    </RootLayout>
  );
};

export default Home;
