import type {NextPage} from "next";

import RootLayout from "@/components/shared/Layout";

import CurrenciesTable from "@/components/CurrenciesTable";
import NewsContainer from "@/components/NewsContainer";

const Home: NextPage = (): JSX.Element => {
  return (
    <RootLayout>
      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-1 px-2 md:px-4">
        <CurrenciesTable />
        <NewsContainer />
      </section>
    </RootLayout>
  );
};

export default Home;
