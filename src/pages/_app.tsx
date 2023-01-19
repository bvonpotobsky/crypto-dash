import type {AppProps} from "next/app";
import {ThemeProvider} from "next-themes";

import {WagmiConfig, createClient} from "wagmi";
import {getDefaultProvider} from "ethers";

import "@/styles/globals.css";

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
});

const MyApp = ({Component, pageProps}: AppProps) => {
  return (
    // <WagmiConfig client={client}></WagmiConfig>
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
