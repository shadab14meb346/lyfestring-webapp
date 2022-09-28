import type { NextPage } from "next";
import Head from "next/head";

import HeroSection from "@components/book-test/hero-section";
import NavBar from "@components/common/navbar";
import HowItWorks from "@components/book-test/how-it-works";
import Footer from "@components/common/footer";
import HighQualityLabsSection from "@components/book-test/high-quality-labs-section";
import PopularLabTests from "@components/book-test/popular-lab-tests";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>LifeString</title>
      </Head>
      <NavBar />
      <HeroSection />
      <HowItWorks />
      <HighQualityLabsSection />
      <PopularLabTests />
      <Footer />
    </>
  );
};

export default Home;
