import Head from "next/head";
import Image from "next/image";
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

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@semabw" />
        <meta name="twitter:title" content="SemaBW" />
        <meta name="twitter:description" content="Unofficial SMA Strada BW Website" />
        <meta name="twitter:image" content="/Landing_Page.jpg" />

        <meta name="keywords" content="SMA, Strada, Bersama, SMA Strada, Bersama SMA, SMA Bersama, SMA Strada Bersama, Bersama SMA Strada, SMA Bersama Strada, Sma Strada Bersama, Sma Bersama Strada, Sma Strada Bersama, Sma Bersama Strada, Bhakti Wiyata, Wiyata Bhakti, Bhakti Wiyata, Wiyata Bhakti, Bhakti Wiyata, Wiyata Bhakti, Bhakti Wiyata, Wiyata Bhakti, Bhakti Wiyata, Wiyata Bhakti, Bhakti Wiyata, Wiyata Bhakti" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="grid md:grid-cols-2 gap-4 h-full mt-8">
          <div className="h-full justify-center items-center p-10 align-middle center flex flex-col">
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
          <div className="hidden md:block">
            <div className="justify-center items-center p-5 flex flex-col ">
              <Image src="/Landing_Page.jpg" alt="Landing Page" width={1920} height={1080} className="rounded-lg border-b-2 border-gray-200 shadow-2xl max-w-lg" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
