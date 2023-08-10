import Hero from "@/components/Hero";
import Steps from "@/components/Steps";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import GradientOne from "@/public/images/gradient-1.png";
import GradientTwo from "@/public/images/gradient-2.png";
import ButtonFixed from "@/components/ButtonFixed";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import Head from "next/head";

const data = {
  '@context': 'https://schema.org',
  title: 'AIRBAG PLUS',
  description: 'Regeneracja poduszek powietrznych.',
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 800);

    return () => clearTimeout(timeout);
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <Head>
        <title>Airbag Plus [SKUP PODUSZEK]</title>
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta
          name="description"
          content={"Skup poduszek. Profesjonalna regeneracja konsol. Naprawiamy deski rozdzielcze po wybuchu poduszki do wszystkich aut osobowych, bez względu na rok produkcji i pochodzenie. Oklejamy nową skają o takiej samej lub maksymalnie zbliżonej strukturze jak w pierwotnej wersji."}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:site_name" content="AIRBAG PLUS" />
        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />

        <meta
          property="og:description"
          content="Skup poduszek. Regeneracja desek rozdzielczych, regulacja pasów bezpieczeństwa."
        />
        <meta
          property="og:image"
          content="/apple-icon-180x180.png"
        />

        <meta 
          property="og:url"
          content="https://airbag-plus.pl"
        />

        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />ffffff
        <link rel="mask-icon" href="{{ base_path }}/images/apple-icon-60x60.png" color="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#000" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#000" />
        <link rel="canononical" href="https://www.airbag-plus.pl/" />
      </Head>
      <main className={"relative"}>
        <ButtonFixed />

        <Navbar />
        <Hero />
        <Image
          src={GradientOne}
          alt={""}
          className={"absolute right-0 -z-10"}
        />
        <div className={"flex mx-auto max-w-[1280px] px-2 flex-col"}>
          <Steps />
          <Services />
          <Contact />
          <Image
            src={GradientTwo}
            alt={""}
            className={"absolute left-0 bottom-0 -z-10"}
          />
          <Footer />
        </div>
      </main>
    </>
  )
}
