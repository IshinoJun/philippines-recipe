import type { AppProps } from "next/app";
import "ress";
import "@/styles/base.scss";
import "@/styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
