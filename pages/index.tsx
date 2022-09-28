import type { NextPage } from "next";
import Head from "next/head";

import HeroSection from "@components/home-page/hero-section";
import NavBar from "@components/common/navbar";
import AssessBySymptoms from "@components/home-page/assess-section/assess-by-symptoms";
import DiagnoseForInfertility from "@components/home-page/assess-section/diagnose-for-interfertility";
import AssessBySTIs from "@components/home-page/assess-section/assess-by-sti";
import Footer from "@components/home-page/footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>LifeString</title>
      </Head>
      <NavBar />
      <HeroSection />
      <AssessBySymptoms />
      <DiagnoseForInfertility />
      <AssessBySTIs />
      <Footer />
    </>
  );
};

export default Home;
