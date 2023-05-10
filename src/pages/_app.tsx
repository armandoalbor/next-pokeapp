import { NextPage } from "next";
import type { AppProps } from "next/app";
import { MainLayout } from "@/layouts/MainLayout";
import "@/styles/globals.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: JSX.Element) => JSX.Element;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: any) => page);

  return <MainLayout>{getLayout(<Component {...pageProps} />)}</MainLayout>;

  // return getLayout(<Component {...pageProps} />);
}
