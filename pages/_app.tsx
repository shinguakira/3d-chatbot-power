import { GameContextProvider } from "@/components/GameContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProps } from "next/app";
import Head from "next/head";
import "raf/polyfill";
import "./globalCSS.css";
import "regenerator-runtime/runtime";
// Taken from: https://tanstack.com/query/latest/docs/react/overview
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>3d Chat Bot Power</title>
        <meta name="description" content="3d Chat Bot for Traning " />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <GameContextProvider>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </GameContextProvider>
    </>
  );
}

export default MyApp;
