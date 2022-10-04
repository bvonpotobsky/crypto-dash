import {Html, Head, Main, NextScript} from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="w-full text-black dark:text-white bg-white dark:bg-black font-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
