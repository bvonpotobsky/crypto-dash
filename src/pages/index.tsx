import type {NextPage} from "next";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CurrenciesTable from "@/components/CurrenciesTable";

/* <h1>Hello World, let&rsquo;s decentralize the time-value of money!</h1> */

const Home: NextPage = () => {
  return (
    <main className="w-full min-h-screen overflow-hidden">
      <Header />

      <section className="grid auto-cols-fr lg:grid-cols-2 grid-rows-4 gap-1 px-2 overflow-hidden">
        <CurrenciesTable />
        <div className="row-start-2 row-end-3 col-start-auto col-end-auto border border-blue-500">2</div>
        <div className="border border-green-800">3</div>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
