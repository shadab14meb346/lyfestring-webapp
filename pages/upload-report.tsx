import type { NextPage } from "next";
import Head from "next/head";

import NavBar from "@components/common/navbar";
import Footer from "@components/home-page/footer";

const UploadReport: NextPage = () => {
  return (
    <>
      <Head>
        <title>LifeString</title>
      </Head>
      <NavBar />
      <h1>Upload Report</h1>
      <Footer />
    </>
  );
};

export default UploadReport;
