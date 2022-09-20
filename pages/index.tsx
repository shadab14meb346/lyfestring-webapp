import type { NextPage } from "next";
import Head from "next/head";

import HeroSection from "@components/home-page/hero-section";
import NavBar from "@components/home-page/navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>LifeString</title>
      </Head>
      <NavBar />
      <HeroSection />
    </>
  );
};

export default Home;
