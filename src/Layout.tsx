import {ReactNode} from "react";

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

const RootLayout: React.FC<{children: ReactNode}> = ({children}): JSX.Element => {
  return (
    <main className="w-full h-screen flex flex-col text-sm lg:text-base overflow-x-hidden">
      <Header />
      {children}
      <Footer />
    </main>
  );
};
export default RootLayout;
