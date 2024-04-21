import Image from "next/image";
import type { AppProps } from "next/app";
import { AppWrapper } from "./AppWrapper";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}
