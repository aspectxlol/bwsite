import Head from "next/head";
import Navbar from "~/components/Navbar";

export default function About() {
  const team = [
    {
      name: 'Louie Hansen Linadi',
      role: 'Developer',
    }
  ]

  return (
    <>
      <Head>
        <title>About - SemaBW</title>
        <meta name="description" content="Unofficial SMA Strada BW Website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://bwsite.vercel.app" />

        <meta property="og:title" content="About - SemaBW" />
        <meta property="og:url" content="https://bwsite.vercel.app/about" />
        <meta property="og:description" content="Unofficial SMA Strada BW Website" />
        <meta property="og:image" content="/Landing_Page.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@semabw" />
        <meta name="twitter:title" content="About - SemaBW" />
        <meta name="twitter:description" content="Unofficial SMA Strada BW Website" />
        <meta name="twitter:image" content="/Landing_Page.jpg" />

        <meta name="keywords" content="SMA, Strada, Bersama, SMA Strada, Bersama SMA, SMA Bersama, SMA Strada Bersama, Bersama SMA Strada, SMA Bersama Strada, Sma Strada Bersama, Sma Bersama Strada, Sma Strada Bersama, Sma Bersama Strada, Bhakti Wiyata, Wiyata Bhakti, Bhakti Wiyata, Wiyata Bhakti, Bhakti Wiyata, Wiyata Bhakti, Bhakti Wiyata, Wiyata Bhakti, Bhakti Wiyata, Wiyata Bhakti, Bhakti Wiyata, Wiyata Bhakti" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>
      <Navbar />
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-text font-bold text-5xl text-center">Meet The Team!</h1>
        <ul>
          {team.map((member) => (
            <li key={member.name} className="text-text font-bold text-2xl text-center list-disc">
              {member.name} - {member.role}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}