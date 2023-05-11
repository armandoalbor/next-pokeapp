import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { darkTheme } from '@/themes';
import '@/styles/globals.css';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: JSX.Element) => JSX.Element;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: any) => page);

  return <NextUIProvider theme={darkTheme}>{getLayout(<Component {...pageProps} />)}</NextUIProvider>;

  // return getLayout(<Component {...pageProps} />);
}
