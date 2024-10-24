import "../styles/globals.css";
import "../styles/Skills.css";
import Layout from "../components/Layout.jsx";
import type { AppProps } from "next/app";
import { AuthContextProvider } from "../context/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthContextProvider>
        <Layout>
          <Component {...pageProps} />;
        </Layout>
      </AuthContextProvider>
    </>
  );
}
