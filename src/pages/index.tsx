import Head from "next/head";
// import Link from "next/link";
import { useEffect } from "react";
import Navbar from "~/components/Navbar";

export default function Home() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);
  return (
    <>
      <Head>
        <title>SemaBW</title>
        <meta name="description" content="Unofficial SMA BW Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center bg-background">

      </main>
    </>
  );
}
