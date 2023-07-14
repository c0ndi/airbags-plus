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
import {useEffect, useState} from "react";
import Loading from "@/components/Loading";
import Head from "next/head";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 800);

    return () => clearTimeout(timeout);
  }, [])

  if (isLoading) {
    return <Loading/>
  }

  return (
    <>
      <Head>
        <title>Airbag Plus</title>
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/>
        <meta
          name="description"
          content={"Profesjonalna regeneracja konsoli. Naprawiamy deski rozdzielcze po wybuchu poduszki do wszystkich aut osobowych, bez względu na rok produkcji i pochodzenie. Oklejamy nową skają o takiej samej lub maksymalnie zbliżonej strukturze jak w pierwotnej wersji."}
        />
        <meta property="og:locale" content="pl_PL"/>
        <meta property="og:site_name" content="AIRBAG PLUS"/>
      </Head>
      <main className={"relative"}>
        <ButtonFixed/>

        <Navbar/>
        <Hero/>
        <Image
          src={GradientOne}
          alt={""}
          className={"absolute right-0 -z-10"}
        />
        <div className={"flex mx-auto max-w-[1280px] px-2 flex-col"}>
          <Steps/>
          <Services/>
          <Contact/>
          <Image
            src={GradientTwo}
            alt={""}
            className={"absolute left-0 bottom-0 -z-10"}
          />
          <Footer/>
        </div>
      </main>
    </>
  )
}
