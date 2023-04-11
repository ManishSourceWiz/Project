import "@/styles/globals.css";
import type { AppProps } from "next/app";
import ResumeProvider from "../context/ResumeContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ResumeProvider>
        <Component {...pageProps} />
      </ResumeProvider>
    </>
  );
}
