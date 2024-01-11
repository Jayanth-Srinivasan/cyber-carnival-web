import EventCards from "@/components/landing/EventCards";
import Landing from "@/components/landing/Landing";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cyber Carnival</title>
        <meta name="description" content="Cyber Carnival" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-[#000000] ">
        <Header />
        <Landing />
        <EventCards />
        <Footer/>
      </main>
    </>
  );
}
