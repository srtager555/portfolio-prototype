import { Main__layout } from "@/layouts/Main.layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Main__layout>
      <Component {...pageProps} />
    </Main__layout>
  );
}
