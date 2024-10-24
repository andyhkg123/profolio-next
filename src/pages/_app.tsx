import "../styles/globals.css";
import "../styles/Skills.css";
import Layout from "../components/Layout.jsx";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </>
  );
}
