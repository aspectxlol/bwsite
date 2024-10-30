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
        <meta name="description" content="Unofficial SMA Strada BW Website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://bwsite.vercel.app" />

        <meta property="og:title" content="SemaBW" />
        <meta property="og:url" content="https://bwsite.vercel.app/" />
        <meta property="og:description" content="Unofficial SMA Strada BW Website" />
        <meta property="og:image" content="/Landing_Page.jpg" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center bg-background">
        <div className="grid md:grid-cols-2 gap-4 h-full">
          <div className="h-full justify-center items-center p-10">
            <h1 className="text-text font-bold text-5xl text-center">
              SMA Strada Bhakti Wiyata
            </h1>
            <p className="text-center text-text font-bold text-2xl w-full">
              Maju Bersama! Hebat Semua!
            </p>
            <div className="w-full justify-center items-center text-center">
              <button
                className="bg-primary text-text font-bold text-2xl py-4 px-8 rounded-lg shadow-2xl transition-all hover:bg-secondary hover:text-text w-5/12 mt-5"
                onClick={() => { location.href = 'https://linktr.ee/PMBSMASTRADABHAKTIWIYATA38' }}
              >
                Apply!
              </button>
            </div>
          </div>
          <div>
            <h1 className="text-text font-bold text-5xl">

            </h1>
          </div>
        </div>
      </main>
    </>
  );
}
